import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'realName',
})
export class RealNamePipe implements PipeTransform {
  names: { [key: string]: string } = {
    rowNum: '№ п/п',
    needName: 'Предмет договора',
    projectNum: 'Номер проекта',
    justification: 'Обоснование включения в бизнес-план',
    procurementWay: 'Способ закупки',
    vendor: 'Наименование поставщика/ подрядчика',
    groupSign: 'Признак группы',
    macroRegion: 'Макрорегион',
    agreementSum: 'Сумма договора/доп соглашения для РПЗ',
    vatRate: 'Ставка НДС',
    agreementDate: 'Дата заключения договора/ доп соглашения',
    agreementExecutionDate: 'Срок исполнения договора/доп соглашения',
    paymentTerm: 'Срок оплаты, дн.',
    expensesType: 'Категория затрат (OPEX/CAPEX)',
    capexType: 'Классификация CAPEX',
    expenseItemForm21: 'Статья расхода по форме Р-21',
    expenseItemDetails: 'Детализация статьи расхода',
    sectionItemForm21: 'Статья раздела 21 бизнес-плана',
    expenseItemFormEconomic: 'Статья формы Экономика/ затраты',
    informationSystem: 'Информационная система',
    vendorName: 'Наименование вендора',
    yearStart: 'Год планирования - старт',
    yearFinish: 'Год планирования - финиш',
    planYear1: 'План перый год',
    planYear2: 'План второй год',
    planYear3: 'План третий год',
    planYear4: 'План четвертый год',
    planYear5: 'План пятый год',
    responsibleComment: 'Комментарии ответственного в Обществе Группы',
    nkComment: 'Комментарии согласующего в НК Роснефть',
    agreementNum: 'Номер договора',
    step2doc: 'Документ о согласовании шага 2, 3',
    requestDoc: 'ПЗ',
    businessEntity: 'Код бизнес единицы',
    OWN_INITIATIVE: 'Собственная инициатива/ потребность',
    RECOMMENDATIONS: 'Рекомендации ИТ ЦАУК Главная Компания',
    INDIVIDUAL_DOC: 'Отдельные ОРД',
    ANOTHER: 'Другие',
    SMALL: 'Мелкая закупка',
    PRICE_REQUEST: 'Запрос цен',
    PROPOSALS_REQUEST: 'Запрос предложений',
    NON_ALTERNATIVE: 'Безальтернативная закупка',
    INTRAGROUP: 'Внутригрупповая закупка',
    EXCLUSIVE_SUPPLIER: 'Закупка у ЕП',
    NK: 'ПАО "НК Роснефть"',
    EOS_IT: 'ИТ-интегратор',
    OG: 'Прочие группы Роснефть',
    RECOMMENDED: 'Сторонние, рекомендованные',
    EXCLUSIVE: 'Сторонние, прямые производители',
    MOSCOW: 'Москва',
    CENTER: 'Центр',
    SOUTH: 'Юг',
    VOLGA_REGION: 'Приволжье',
    URAL: 'Урал',
    WEST_SIBERIAN: 'Западная сибирь',
    EAST_SIBERIAN: 'Восточная сибирь',
    FAR_EAST: 'Дальний восток',
    VAT_0: '0%',
    VAT_10: '10%',
    VAT_18: '18%',
    VAT_20: '20%',
    MAINTAINING: 'Поддержка',
    DEVELOPMENT: 'Развития',
  };

  transform(value: string): string {
    if (!this.names[value.trim()]) {
      return value;
    }

    return this.names[value.trim()];
  }
}
