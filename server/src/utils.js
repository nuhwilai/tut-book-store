const _ = require("lodash");

function createHandler(items, rawData) {
  let createItem = null;
  const nextId = _.isEmpty(items)
    ? 1
    : _.chain(items).maxBy("id").get("id").value() + 1;

  createItem = {
    id: nextId,
    ...rawData,
  };
  items.push(createItem);

  return createItem;
}

function updateHandler(items, id, rawData) {
  let updateItem = null;
  let updateIndex = null;

  for (const [index, item] of items.entries()) {
    if (item.id === id) {
      updateIndex = index;
      updateItem = {
        ...item,
        ...rawData,
      };

      console.log(updateIndex, updateItem);
    }
  }

  if (updateIndex >= 0) {
    console.log("updateItem", updateIndex);
    items[updateIndex] = updateItem;
  }

  return updateItem;
}

function deleteHandler(items, id) {
  const removeIndex = _.findIndex(items, { id });
  if (removeIndex > -1) {
    items.splice(removeIndex, 1);
  }

  return { id };
}

exports.simpleRestAPI = (app, items) => {
  app.get("/", function (req, res) {
    res.send({
      statusCode: 1,
      data: items,
    });
  });

  app.get("/:id", function (req, res) {
    res.send({
      statusCode: 1,
      data: _.find(items, { id: Number(req.params.id) }),
    });
  });

  app.post("/", function (req, res) {
    res.send({
      statusCode: 1,
      data: createHandler(items, req.body),
    });
  });

  app.put("/:id", function (req, res) {
    res.send({
      statusCode: 1,
      data: updateHandler(items, Number(req.params.id), req.body),
    });
  });

  app.delete("/:id", function (req, res) {
    res.send({
      statusCode: 1,
      data: deleteHandler(items, Number(req.params.id)),
    });
  });

  return app;
};
