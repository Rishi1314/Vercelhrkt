import fs from 'fs';
import path from 'path';

export const getAllFiles = (dirPath: string): string[] => {
    let response: string[] = [];
    const allFilesandFolders = fs.readdirSync(dirPath);
    allFilesandFolders.forEach((element: string) => {
        const fullPath = path.join(dirPath, element);
        if (fs.statSync(fullPath).isDirectory()) {
            response = response.concat(getAllFiles(fullPath));
        } else {
            response.push(fullPath);
        }
    });
    return response;
}