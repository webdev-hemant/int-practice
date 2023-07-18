/* eslint-disable */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */

const csvToJson = require("convert-csv-to-json");
import fs from "fs";
import { divideArray } from "./divideSitemapArray";
import { ISitemap } from "./sitemapRoutes";

const createSitemapXml = (filePath: string) => {
  const EXTERNAL_DATA_URL = "https://www.truemeds.in";
  const pathOfXmlFiles = "public";
  // convert csv to json
  const jsonFromCsv = csvToJson.getJsonFromCsv(filePath);
  // convert json to iterable array of object
  const arrObj = jsonFromCsv.map((item:ISitemap) =>
    Object.entries(item).reduce((acc, [key, value]) => {
      const keyArray = key.split(",");
      /* @ts-ignore*/
      const valueArray = value.split(",");
      return keyArray.reduce((obj, item, index) => {
        return { ...obj, [item]: valueArray[index] };
      }, acc);
    }, {})
  );

  const createMultipleSitemap = () => {
    const listOfArrays = divideArray(arrObj);
    const date = new Date().toLocaleString().split(",")[0];

    for (const index in listOfArrays) {
      // creating final sitemap file content
      const finalSitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <!--We manually set the two URLs we know already-->
            ${listOfArrays[index].map(({ product_url_suffix }: any) => {
              return `<url><loc>${`${EXTERNAL_DATA_URL}/${product_url_suffix
                ?.toLowerCase()
                ?.trim()
                ?.replace(/\s/g, "-")}`}</loc><lastmod>${date}</lastmod></url>`;
            })}
          </urlset>
        `;

      // create sitemap.xml file (optional in nextjs)
      fs.appendFile(
        `${pathOfXmlFiles}/sitemap-medicine-${index}.xml`,
        finalSitemapContent,
        (err) => {
          if (err) console.log(err);
        }
      );
    }
  };

  createMultipleSitemap();
  // return finalSitemapContent;
  return pathOfXmlFiles;
};

export { createSitemapXml };
