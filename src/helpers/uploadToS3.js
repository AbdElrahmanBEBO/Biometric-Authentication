const uploadImgToS3 = async (file) => {
  const fileName = file.name;
  const type = file.type;
  const response = await fetch(
    `https://ey5anj8005.execute-api.us-east-2.amazonaws.com/dev/createpresignedurl/${fileName}?filetype=${type}`
  );
  const presignedUrl = await response.json();
  console.log(presignedUrl.postURL, "from post url");
  fetch(presignedUrl.postURL, {
    method: "PUT",
    body: file,
    Headers: {
      ContentType: type,
    },
  }).then((res) => {
    if (res.statusText === "OK") {
      return presignedUrl.getURL;
    }
  });
};
