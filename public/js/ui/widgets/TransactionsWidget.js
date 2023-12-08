/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    if (!element) {
      throw new Error("Error: element not found");
    }
    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    console.log(this.element);
    this.element.addEventListener("click", (e) => {
      e.preventDefault();
      const btnPlus = e.target.closest(".btn-success");
      const btnMinus = e.target.closest(".btn-danger");
      if (btnPlus) {
        App.getModal("newIncome").open();
      } else if (btnMinus) {
        App.getModal("newExpense").open();
      }
    });
  }
}
