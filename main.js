$(document).ready(function () {
    $('#task-add').click(function (e) {
        e.preventDefault();
        addTask();
    });
    $('#task-input').keypress(function (e) {
        if (e.which == 13) addTask()
    })

    $('#task-list').on('click', '.delete-btn', function () {
        $(this).closest('.task-item').fadeOut(30, function () {
            $(this).remove()
        })
    })

    $('#task-list').on('click', '.task-text', function () {
        $(this).toggleClass('completed');
    });

    function addTask() {
        const taskText = $('#task-input').val().trim()

        if (taskText) {
            $('#task-list').append(`
                <li class="task-item">
                    <span class="task-text">${taskText}</span>
                    <div class="task-actions">
                        <button class="delete-btn">Remover</button>
                    </div>
                </li>
                `)
            $('#task-input').val('').focus()
        }
    }
})