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

export function createToolbar() {
  const button = {
    icon: '',
    active: false,
    value: {}
  };
  const buttons = [
    {
      ...button,
      icon: 'format_align_left',
      value: {textAlign: 'left'}
    },
    {
      ...button,
      icon: 'format_align_center',
      value: {textAlign: 'center'}
    },
    {
      ...button,
      icon: 'format_align_right',
      value: {textAlign: 'right'}
    },
    {
      ...button,
      icon: 'format_bold',
      value: {fontWeight: 'bold'}
    },
    {
      ...button,
      icon: 'format_italic',
      value: {fontStyle: 'italic'}
    },
    {
      ...button,
      icon: 'format_underline',
      value: {textDecoration: 'underline'}
    },
  ];
  return buttons.map(toButton).join('');
}
