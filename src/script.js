$(document).ready(function () {
  // Remove student
  $(document).on('click', '.remove-student', function () {
    $(this).closest('div').remove();
  });

  // Add attendance row
  $('#addData').click(function () {
    const startTime = $('#startTime').val();
    const endTime = $('#endTime').val();
    const activity = $('#activity').val();
    const status = $('#status').val();
    const details = $('#details').val();

    if (!startTime || !endTime || !activity || !status || !details) return;

    const totalTime = `${startTime} - ${endTime}`;

    const newRow = `
      <tr class="border-b border-gray-300">
        <td class="py-2 px-4">${totalTime}</td>
        <td class="py-2 px-4">${activity}</td>
        <td class="py-2 px-4">${details}</td>
        <td class="py-2 px-4">${status}</td>
        <td class="py-2 px-4 text-red-600 cursor-pointer delete-row">
          <i class="bi bi-trash-fill"></i>
        </td>
      </tr>
    `;
    $('#attendanceTableBody').append(newRow);

    // Reset fields
    $('#startTime, #endTime, #activity, #status, #details').val('');
  });

  // Delete row
  $(document).on('click', '.delete-row', function () {
    $(this).closest('tr').remove();
  });
});