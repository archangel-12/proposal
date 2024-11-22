# 1. Use the Bun base image
FROM oven/bun:latest as builder

# 2. Set the working directory inside the container
# Update to point to the `core/app` directory
WORKDIR /core/app

# 3. Copy package files and install dependencies
COPY core/app/package.json core/app/bun.lockb ./
RUN bun install

# 4. Copy the rest of the application code
COPY core/app .

# 5. Use a clean runtime image for production (optional)
FROM oven/bun:runtime as runtime

# 6. Set the working directory for runtime
WORKDIR /core/app

# 7. Copy built files and runtime dependencies
COPY --from=builder /core/app /core/app

# 8. Set environment variables (optional)
ENV PORT=3000
ENV NODE_ENV=production

# 9. Expose the app's port
EXPOSE 3000

# 10. Run the Next.js app
CMD ["bun", "next", "start"]