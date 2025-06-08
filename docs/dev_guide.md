# Dev Guide

This document serves as a guide for developers working on the project. It includes setup instructions, coding standards, and best practices to follow.

## Project Setup

1. **Clone the Repository**: Start by cloning the repository to your local machine.

   ```bash
   git clone <FILL IN>
   cd t-recs
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies.

   ```bash
   yarn install
   ```

3. **Environment Variables**: Create a `.env.local` file in the root directory and add any necessary environment variables. You can refer to `.env.example` for guidance on what variables are needed.

4. **Run the Development Server**: Start the development server to see the application in action.

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Pushing Changes

1. **Create a Branch**: Before making any changes, create a new branch for your feature or bug fix.

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**: Implement your changes in the codebase. Ensure that you follow the coding standards outlined below.
3. **Commit Your Changes**: Once you are satisfied with your changes, commit them with a descriptive message.

   ```bash
   git add .
   git commit -m "Add feature: your-feature-description"
   ```

4. **Push Your Branch**: Push your changes to the remote repository.

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**: Go to the repository on GitHub and create a pull request from your branch to the `main` branch. Provide a clear description of your changes and any relevant context.

6. **Review Process**: Wait for your pull request to be reviewed by other team members. Address any feedback or changes requested during the review process.  You will be required to get at least one approval before merging.
