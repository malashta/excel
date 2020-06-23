function toHtml() {
  return `
    <div class="db__record">
      <a href="#">таблица 1</a>
      <strong>12.06.2020</strong>
    </div>    
  `;
}

function getAllKeys() {
  const keys = [];
  for (let i=0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.includes('excel')) {
      continue;
    }
    keys.push(localStorage[key]);
  }
  return keys;
}

export function createRecordsTable() {
  const keys = getAllKeys();
  console.log(keys);

  if (!keys.length) {
    return `Вы пока не создавали таблицы`;
  }

  return `
    <div class="db__list-header">
      <span>Название</span>
        <span>Дата открытия</span>
      </div>
  
      <ul class="db__list">
        ${keys.map(toHtml).join('')}
      </ul>
    </div>    
  `;
}
