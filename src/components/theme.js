export const handleSwitchToggle = (switchOn, setSwitchOn) => {setSwitchOn(!switchOn)}
export const updateBodyClass = (switchOn) => switchOn ? (document.body.classList.add('dark'), document.body.classList.remove('light')) : (document.body.classList.add('light'), document.body.classList.remove('dark'));
