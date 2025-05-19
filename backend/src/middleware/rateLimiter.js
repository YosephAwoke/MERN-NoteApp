import {Ratelimit} from "@upstash/ratelimit";

const rateLimiter = async (req, res, next) => {

  try {
    // Check if the request is rate limited
    const { success} = await ratelimit.limit("my-rate-limit"
    );

    if (!success) {
      return res.status(429).json({
        message: `Too many requests. Try again later`,
      });
    }

    // Proceed to the next middleware or route handler
    next();
  } catch (error) { 
    console.error("Rate limit error:", error);
    next(error);
  }
};

export default rateLimiter;

//