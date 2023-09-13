import { NextResponse } from "next/server";

import { ObjectId } from "mongodb";
import image from "@/models/image";
import connect from "../db";

export const GET = async (request) => {
  try {
    await connect();
    return new NextResponse(await image.find());
  } catch (error) {
    return new NextResponse("Error in fetching images " + error, {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  try {
    await connect();

    const newImage = new image({ url: request.body.url });
    await newImage.save();

    return new NextResponse({ message: "created" }, { status: 201 });
  } catch (error) {
    return new NextResponse("Error in fetching images " + error, {
      status: 500,
    });
  }
};

export const DELETE = async (request) => {
  try {
    await connect();

    await image.deleteOne({ _id: new ObjectId(request.body.id) });

    return new NextResponse({ message: "deleted" });
  } catch (error) {
    return new NextResponse("Error in fetching images " + error, {
      status: 500,
    });
  }
};
