module.exports = mongoose => {
    const userSchema = mongoose.Schema(
      {
        fullName: String,
        email: String,
        password: String,
        confirmPassword: String
      },
      { timestamps: true }
    );
  
    const User = mongoose.model('User', userSchema);
    return User;
  };
  