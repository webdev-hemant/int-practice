import axios from "axios";
// import path from "path";
import https from "https";
import fs from "fs";

const getCsvFile = async () => {
  const GET_CSV_LINK_URL = "https://reports.tmmumbai.in/createCsvForSitemap";
  try {
    const fileUrl = await axios.get(GET_CSV_LINK_URL);

    const downloadFile = async (url = " ") => {
      const dirName = "public";

      fs.readdir(dirName, (err: NodeJS.ErrnoException | null, files: Array<string>) => {
        if (err) console.log("file read error!");
        files.forEach((fileName: string) => {
          const pattern = /(\d+)\.xml$/;
          const match = filename.match(pattern);
          if (match || fileName.includes(".csv")) {
            console.log({ fileName });
            const filePath = `${dirName}/${fileName}`;
            fs.unlinkSync(filePath);
          }
        });
      });
      const filename = url.split("/")[url.split("/").length - 1];
      const customPathToSaveFile = `${dirName}/${filename}`;
      const checkIfDownloaded = () =>
        new Promise((resolve, reject) => {
          try {
            https.get(url, (res) => {
              const fileStream = fs.createWriteStream(customPathToSaveFile);
              res.pipe(fileStream);

              fileStream.on("finish", () => {
                fileStream.close();
                resolve(true);
              });
            });
          } catch (error) {
            reject(error);
          }
        });

      const isDownloaded = await checkIfDownloaded();

      return isDownloaded && customPathToSaveFile;
    };

    const downloadedFilePath = await downloadFile(fileUrl.data);

    return downloadedFilePath;
  } catch (error) {
    console.log(error);
  }
};

export { getCsvFile };
