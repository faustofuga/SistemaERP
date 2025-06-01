document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var detailEl = document.getElementById('eventDetails');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    events: [
      {
        title: 'Aluguel - R$1.200,00',
        date: '2025-06-05',
        description: 'Pagamento do aluguel da sede'
      },
      {
        title: 'Fornecedor - R$750,00',
        date: '2025-06-10',
        description: 'Compra de pedras para produção'
      },
      {
        title: 'Internet - R$400,00',
        date: '2025-06-15',
        description: 'Plano de internet e serviços'
      }
    ],
    eventClick: function(info) {
      const { title, startStr, extendedProps } = info.event;
      detailEl.innerHTML = `
        <h4>Detalhes da Conta</h4>
        <p><strong>Data:</strong> ${startStr}</p>
        <p><strong>Título:</strong> ${title}</p>
        <p><strong>Descrição:</strong> ${extendedProps.description || 'Sem descrição'}</p>
      `;
    }
  });

  calendar.render();
});