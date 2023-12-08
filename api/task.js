import { ListTablesCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  UpdateCommand,
  PutCommand,
  DynamoDBDocumentClient,
  ScanCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
import crypto from "crypto";

const client = new DynamoDBClient({ region: "us-east-2" });
const docClient = DynamoDBDocumentClient.from(client);


export const fetchBlogs = async () => {
  const command = new ScanCommand({
    ExpressionAttributeNames: { "#url": "url" },
    ProjectionExpression: "id, date_published, generated_blog_en, title, #url, image",
    TableName: "GeneratedBlogs",
  });

  const response = await docClient.send(command);

  return response;
};