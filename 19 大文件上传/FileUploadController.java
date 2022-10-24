package com.zb.controller;

import com.zb.common.SplitImage;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@WebServlet({"/api/fileupload"})
public class FileUploadController extends BaseServlet {

    public void resolve(HttpServletRequest request, HttpServletResponse response) {
        try {
            String pathname = this.realPath + "upload" + File.separator + new SimpleDateFormat("yyyy-MM-dd").format(new Date());
            String filepathname = "";

            List<FileItem> formItems = new ServletFileUpload(new DiskFileItemFactory()).parseRequest(request);
            if (formItems != null && formItems.size() > 0) {
                HashMap<String, String> hashMap = new HashMap<>();
                FileItem fileItem = null;

                for (FileItem item : formItems) {
                    String fieldName = item.getFieldName();
                    if (!item.isFormField() && fieldName.equals("file")) {
                        fileItem = item;
                    } else {
                        hashMap.put(fieldName, item.getString("UTF-8"));
                    }
                }
                /*hashMap.forEach((key, value) -> {
                    System.out.println("key:" + key + ",value:" + value);
                });*/

                String index = hashMap.get("index");
                String name = hashMap.get("name");
                String length = hashMap.get("length");
                String mode = hashMap.get("mode");
                String row = hashMap.get("row").equals("") ? "1" : hashMap.get("row");
                String col = hashMap.get("col").equals("") ? "1" : hashMap.get("col");
                String width = hashMap.get("width").equals("") ? "500" : hashMap.get("width");
                String height = hashMap.get("height").equals("") ? "500" : hashMap.get("height");
                String output = hashMap.get("output").equals("") ? "${file_name}_${chunk_index}${extension}" : hashMap.get("output");
                filepathname = pathname + File.separator + name;

                if (fileItem != null) {
                    /**
                     * 1、把上传的分片数据按命名规范写入.tem临时文件
                     * */
                    // 创建 .tem 临时文件
                    File temFile = new File(filepathname + "_" + index + ".tem");
                    if (!temFile.getParentFile().exists()) {
                        temFile.getParentFile().mkdirs();
                    }
                    // 保存上传的文件内容到 .tem 临时文件
                    fileItem.write(temFile);

                    /**
                     * 2、读取.tmp临时分片文件数据，写入最终文件
                     * */
                    // 读取临时文件的内容到最终文件
                    FileInputStream fis = new FileInputStream(temFile);
                    int len = 0;
                    int size = 1 * 1024 * 1024;
                    byte[] bytes = new byte[size];
                    while ((len = fis.read(bytes)) != -1) {
                        // 把字节数组写到最终文件
                        File file2 = new File(filepathname);
                        FileOutputStream fos = new FileOutputStream(file2, true);
                        fos.write(bytes, 0, len);
                        fos.close();
                    }
                    fis.close();
                }

                if (index.equals(length)) {
                    /**
                     * 3、所有分片文件上传完毕，删除.tmp临时分片文件
                     * */
                    System.out.println("文件上传完毕：" + name);
                    for (int i = 1; i <= Integer.valueOf(length); i++) {
                        File file = new File(filepathname + "_" + i + ".tem");
                        System.out.println("删除临时文件: " + file.exists() + " : " + file.getName());
                        if (file.exists())
                            file.delete();
                    }

                    String[] args = {
                            filepathname,
                            mode,
                            mode.equals("1") ? row : width,
                            mode.equals("1") ? col : height,
                            output
                    };
                    SplitImage.main(args);
                }
            }

        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}