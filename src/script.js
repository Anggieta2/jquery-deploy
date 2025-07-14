$(document).ready(function () {
  $(document).on("click", ".remove-student", function () {
    $(this).closest("div").remove();
  });

  $("#addData").click(function () {
    const startTime = $("#startTime").val();
    const endTime = $("#endTime").val();
    const activity = $("#activity").val();
    const status = $("#status").val();
    const details = $("#details").val();

    if (!startTime || !endTime || !activity || !status || !details) return;

    const totalTime = `${startTime} - ${endTime}`;

    const newRow = `
      <tr class="border-b border-gray-300 text-center">
        <td class="py-2 px-4">${totalTime}</td>
        <td class="py-2 px-4">${activity}</td>
        <td class="py-2 px-4">${details}</td>
        <td class="py-2 px-4">${status}</td>
        <td class="py-2 px-4 text-red-600 cursor-pointer delete-row text-center">
          <i class="bi bi-trash-fill"></i>
        </td>
      </tr>
    `;
    $("#attendanceTableBody").append(newRow);

    $("#startTime, #endTime, #activity, #status, #details").val("");
  });

  $(document).on("click", ".delete-row", function () {
    $(this).closest("tr").remove();
  });
});


$(document).ready(function () {
    $('#toggleMenu').click(function (e) {
      e.preventDefault(); // mencegah link "#" scroll ke atas
      $('#menu-list').toggle(); // toggle tampilan menu
    });
  });