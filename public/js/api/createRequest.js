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
    try {
      xhr.open(method, url);
      xhr.send();
    } catch (err) {
      callback(err);
    }
  } else {
    for (const key in options.data) {
      formData.append(key, options.data[key]);
    }
    try {
      xhr.open(method, url);
      xhr.send(formData);
    } catch (err) {
      callback(err);
    }
  }
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(null, xhr.response);
    } else {
      callback("Ошибка: проблема с отправкой запроса", {});
    }
  };

  xhr.onerror = () => {
    callback(new Error("Ошибка: проблема с сетью"));
  };
};
