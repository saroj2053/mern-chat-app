import User from "../models/user.js";

export const getUsers = async (req, res) => {
  try {
    const signedInUserId = req.user._id;
    const allUsersExceptSignedInUser = await User.find({
      _id: { $ne: signedInUserId },
    }).select("-password");
    res.status(200).json(allUsersExceptSignedInUser);
  } catch (error) {
    console.log("Error in getUsers controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
