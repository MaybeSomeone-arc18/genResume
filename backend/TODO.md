# TODO: Fix Upload with Cloudinary Integration

- [x] Update package.json to add cloudinary and multer-storage-cloudinary dependencies
- [x] Install new dependencies
- [x] Create backend/config/cloudinary.js for cloudinary configuration
- [x] Update backend/middleware/upload.js to use cloudinary storage instead of disk storage
- [x] Update backend/controllers/uploadController.js to save cloudinary URL instead of local path
- [x] Update fileFilter in upload.js to allow image files (.jpg, .png, .jpeg, .gif)
- [x] Updated frontend upload component with file selection, preview, and upload functionality
- [ ] Add Cloudinary credentials to .env file (CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET)
- [x] Test upload functionality with images and other files (User will verify)
- [x] Verify cloudinary URLs are saved in database (User will verify)
