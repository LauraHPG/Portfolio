import os

# Path to the main directory containing the subfolders
main_directory = '.'

# Loop through each folder in the main directory
for folder_name in os.listdir(main_directory):
    folder_path = os.path.join(main_directory, folder_name)
    
    if os.path.isdir(folder_path):  # Check if it's a directory
        # Loop through each file in the folder
        for filename in os.listdir(folder_path):
            file_path = os.path.join(folder_path, filename)
            
            if os.path.isfile(file_path):  # Check if it's a file
                # Construct the new filename
                new_filename = f"{folder_name}_{filename}"
                new_file_path = os.path.join(folder_path, new_filename)
                
                # Rename the file
                os.rename(file_path, new_file_path)
                
print("Renaming completed!")
