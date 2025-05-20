import ratelimit from "../config/upstash.js";
// This middleware function is used to limit the rate of incoming requests

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
    console.log("Rate limit error:", error);
    next(error);
  }
};

export default rateLimiter;

//