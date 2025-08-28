const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Deactivate all tabs
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Show the corresponding panel
        const target = tab.dataset.tab;
        panels.forEach(panel => {
            panel.classList.toggle('active', panel.id === target);
        });
    });
});
