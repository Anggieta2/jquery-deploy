$(document).ready(function () {
  $(document).on("click", ".remove-student", function () {
    $(this).closest("div").remove();
  });

  $(document).ready(function () {
    $(".addData").on("click", function () {
      let studentContent = $(this).closest(".studentList");

      const checkAttended = studentContent.find(".check").val();
      const startTime = studentContent.find(".startTime").val();
      const endTime = studentContent.find(".endTime").val();
      const activity = studentContent.find(".activity").val();
      const status = studentContent.find(".status").val();
      const details = studentContent.find(".details").val();
      const table = studentContent.find(".attendanceTableBody");

      if (!startTime || !endTime || !activity || !status || !details) return;

      const totalTime = `${startTime} - ${endTime}`;

      const rowDataAttended = `
      <tr class="border-b border-gray-300 text-center">
        <td class="py-2 px-4">${totalTime}</td>
        <td class="py-2 px-4">${checkAttended}</td>
        <td class="py-2 px-4">${activity}</td>
        <td class="py-2 px-4">${details}</td>
        <td class="py-2 px-4">${status}</td>
        <td class="py-2 px-4 text-red-600 cursor-pointer delete-row text-center">
          <i class="bi bi-trash-fill"></i>
        </td>
      </tr>
      `;

      table.append(rowDataAttended);

      studentContent.find(".startTime, .endTime, .activity, .status, .details").val("");
    });
  });

  $(".removeStudent").each((i, el) => {
    $(el).on("click", function () {
      if (confirm("Are you sure want to delete this student?"))
        $(".student-content").eq(i).fadeOut();
    });
  });

  $(document).on("click", ".delete-row", function () {
    if (confirm("Are you sure you want to delete this row?"))
      $(this).closest("tr").remove();
  });

  $(document).on("click", "#today", () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const todayDate = `${yyyy}-${mm}-${dd}`;
    $("#date").val(todayDate);
  });

  $(document).ready(function () {
    // Tampilkan atau sembunyikan menu saat tombol diklik
    $("#toggleMenu").click(function (e) {
      e.preventDefault();
      $("#menu-list").toggle();
      e.stopPropagation(); // cegah klik merembet ke dokumen
    });

    // Jangan sembunyikan jika klik terjadi di dalam menu
    $("#menu-list").click(function (e) {
      e.stopPropagation();
    });

    // Sembunyikan menu jika klik terjadi di luar
    $(document).click(function () {
      $("#menu-list").hide();
    });
    $("a")
      .not("#toggleMenu")
      .click(function () {
        $("#menu-list").hide();
      });
  });

  $(document).ready(function () {
    // Tampilkan atau sembunyikan menu saat tombol diklik
    $("#toggleProfile").click(function (e) {
      e.preventDefault();
      $("#profileMenu").toggle();
      e.stopPropagation(); // cegah klik merembet ke dokumen
    });

    // Jangan sembunyikan jika klik terjadi di dalam menu
    $("#profileMenu").click(function (e) {
      e.stopPropagation();
    });

    // Sembunyikan menu jika klik terjadi di luar
    $(document).click(function () {
      $("#profileMenu").hide();
    });
  });
  $("a")
    .not("#toggleProfile")
    .click(function () {
      $("#profileMenu").hide();
    });
});

$(document).ready(() => {
  $(".student-trigger").on("click", function () {
    const accordionContent = $(this)
      .closest(".student-wrapper")
      .find(".student-content");

    accordionContent.slideToggle();
  });
});
