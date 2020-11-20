import { Request, Response } from "express";

/**
 * Home page.
 * @route GET /
 */
export const index = (req: Request, res: Response): void => {
    res.render("index",
        {
            title: "Hey",
            message: "Hello there!"
        });
};
