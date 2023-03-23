import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    firstCourse: "Web Development",
    secondCourse: "AI",
    thirdCourse: "Mobile Development",
  });
}
