import bcrypt from 'bcryptjs';

// Function to hash a password
export const hashPassword = async (password: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(10); // Generate a salt with 10 rounds
    const hash = await bcrypt.hash(password, salt); // Hash the password with the salt
    return hash; // Return the hashed password
  } catch (error) {
    throw new Error('Failed to hash password'); // Throw an error if hashing fails
  }
};

// Function to verify a password
export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword); // Compare the password with the hashed password
    return isMatch; // Return true if the password matches, false otherwise
  } catch (error) {
    throw new Error('Failed to verify password'); // Throw an error if verification fails
  }
};
