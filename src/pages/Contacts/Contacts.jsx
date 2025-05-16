import React from 'react'
import styles from './contact.module.scss'

const Contacts = () => {
  return (
    <div className={styles.con}>
      <div className={styles.block}>
        <h1>Контакты </h1>

        <section className={styles.section}>
          <h2>Экстренные номера</h2>
          <ul className={styles.list}>
            <li>
              <strong>112</strong> — Единый номер экстренной помощи
            </li>
            <li>
              <strong>101</strong> — Пожарная служба
            </li>
            <li>
              <strong>102</strong> — Полиция
            </li>
            <li>
              <strong>103</strong> — Скорая медицинская помощь
            </li>
            <li>
              <strong>104</strong> — Аварийная газовая служба
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Что делать при ЧС</h2>
          <ol className={styles.list}>
            <li>Сохраняйте спокойствие.</li>
            <li>Оцените обстановку и угрозу для жизни.</li>
            <li>
              Позвоните по номеру <strong>112</strong> и чётко сообщите информацию.
            </li>
            <li>Следуйте инструкциям спасателей и экстренных служб.</li>
            <li>При возможности — помогите окружающим.</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>Полезные ссылки</h2>
          <ul className={styles.list}>
            <li>
              <a
                href="https://www.mchs.gov.kg/ru/contacts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Официальный сайт МЧС КР
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Contacts
