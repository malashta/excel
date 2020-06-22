function toButton({icon, active, value}) {
  const meta = `
    data-type="button"
    data-value='${JSON.stringify(value)}'
  `;
  return `
    <div
      class="button ${active ? 'active' : ''}"
      ${meta}
    >
      <span
        class="material-icons"
        ${meta}
      >
        ${icon}
      </span>
    </div>
  `;
}

export function createToolbar(s) {
  const button = {
    icon: '',
    active: false,
    value: {}
  };
  const buttons = [
    {
      ...button,
      icon: 'format_align_left',
      value: {textAlign: 'left'},
      active: s['textAlign'] === 'left'
    },
    {
      ...button,
      icon: 'format_align_center',
      value: {textAlign: 'center'},
      active: s['textAlign'] === 'center'
    },
    {
      ...button,
      icon: 'format_align_right',
      value: {textAlign: 'right'},
      active: s['textAlign'] === 'right'
    },
    {
      ...button,
      icon: 'format_bold',
      active: s['fontWeight'] === 'bold',
      value: {fontWeight: s['fontWeight'] === 'bold' ? 'normal' : 'bold'}
    },
    {
      ...button,
      icon: 'format_italic',
      active: s['fontStyle'] === 'italic',
      value: {fontStyle: s['fontStyle'] === 'italic' ? 'normal' : 'italic'}
    },
    {
      ...button,
      icon: 'format_underline',
      active: s['textDecoration'] === 'underline',
      value: {textDecoration: s['textDecoration'] === 'underline'
        ? 'none'
        : 'underline'
      }
    },
  ];
  return buttons.map(toButton).join('');
}
