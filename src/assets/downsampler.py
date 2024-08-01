import os
from PIL import Image, ImageOps

def downsample_image(image_path, output_path, scale_factor=0.5):
    """
    Downsamples an image by a given scale factor and saves it to the output path, maintaining its orientation.

    :param image_path: Path to the original image.
    :param output_path: Path to save the downsampled image.
    :param scale_factor: Factor by which to downsample the image (e.g., 0.5 for half size).
    """
    with Image.open(image_path) as img:
        # Correct orientation based on EXIF data
        img = ImageOps.exif_transpose(img)
        
        # Calculate new dimensions
        new_width = int(img.width * scale_factor)
        new_height = int(img.height * scale_factor)
        
        # Downsample the image
        downsampled_img = img.resize((new_width, new_height), Image.ANTIALIAS)
        
        # Save the downsampled image
        downsampled_img.save(output_path)

def process_folder(input_folder, output_folder, scale_factor=0.5):
    """
    Processes all images in the input folder, downsampling each and saving to the output folder.

    :param input_folder: Folder containing images to downsample.
    :param output_folder: Folder to save the downsampled images.
    :param scale_factor: Factor by which to downsample the images.
    """
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    for filename in os.listdir(input_folder):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif')):
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, f"{os.path.splitext(filename)[0]}_downsampled{os.path.splitext(filename)[1]}")
            downsample_image(input_path, output_path, scale_factor)

# Define your input and output folders
input_folder = './ghana'
output_folder = 'path/to/your/output/folder'

# Downsample images in the folder
process_folder(input_folder, input_folder, scale_factor=0.2)
