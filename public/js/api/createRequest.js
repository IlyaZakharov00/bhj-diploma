/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options) => {
  let { url, method, callback } = options;
  const xhr = new XMLHttpRequest();
  const formData = new FormData();
  xhr.responseType = "json";

  if (method === "GET") {
    url = url.concat("?", new URLSearchParams(options.data).toString());
    xhr.open(method, url);
  } else {
    for (const key in options.data) {
      formData.append(key, options.data[key]);
      xhr.open(method, url);
    }
  }
  try {
    xhr.send(formData);
  } catch (err) {
    callback(err);
  }
  xhr.onload = () => {
    callback(null, xhr.response);
  };

  xhr.onerror = () => {
    callback(new Error("Ошибка!"));
  };
};
