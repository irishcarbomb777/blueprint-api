import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.tableName,
        Item: {
        // The attributes of the item to be created
        mockupId     : event.body.mockupId, // The mockup id
        imprint      : event.body.imprint,  // Mockup imprint type
        logoLocation : event.body.logoLocation, // The mockup logo location
        productCode  : event.body.productCode // The mockup product code
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});