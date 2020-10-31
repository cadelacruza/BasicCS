function formatDuration(seconds) {
    if (seconds === 0) {
        return "now";
    }

    let years = Math.floor(seconds / 31536000);
    let yearsS = years > 1 ? `${years} years` : `${years} year`;
    console.log(years);
    let days = Math.floor((seconds - (years * 31536000)) / 86400);
    let daysS = days > 1 ? `${days} days` : `${days} day`;
    console.log(days);
    let hours = Math.floor((seconds - ((days * 86400) + (years * 31536000))) / 3600);
    let hoursS = hours > 1 ? `${hours} hours` : `${hours} hour`;
    console.log(hours);
    let minutes = Math.floor((seconds - ((hours * 3600) + (days * 86400) + (years * 31536000))) / 60);
    let minutesS = minutes > 1 ? `${minutes} minutes` : `${minutes} minute`;
    console.log(minutes);
    let segundos = seconds - ((hours * 3600) + (minutes * 60) + (days * 86400) + (years * 31536000));
    let segundosS = segundos > 1 ? `${segundos} seconds` : `${segundos} second`;
    console.log(segundos);

    let statements = [];
    if (years > 0) {
        statements.push(yearsS);
    }

    if (days > 0) {
        statements.push(daysS);
    }

    if (hours > 0) {
        statements.push(hoursS);
    }

    if (minutes > 0) {
        statements.push(minutesS);
    }

    if (segundos > 0) {
        statements.push(segundosS);
    }

    console.log(statements);
    if (statements.length === 5) {
        console.log(`${statements[0]}, ${statements[1]}, ${statements[2]}, ${statements[3]} and ${statements[4]}`);
        return `${statements[0]}, ${statements[1]}, ${statements[2]}, ${statements[3]} and ${statements[4]}`;
    }

    if (statements.length === 4) {
        console.log(`${statements[0]}, ${statements[1]}, ${statements[2]} and ${statements[3]}`);
        return `${statements[0]}, ${statements[1]}, ${statements[2]} and ${statements[3]}`;
    }

    if (statements.length === 3) {
        console.log(`${statements[0]}, ${statements[1]} and ${statements[2]}`);
        return `${statements[0]}, ${statements[1]} and ${statements[2]}`;
    }

    if (statements.length === 2) {
        return `${statements[0]} and ${statements[1]}`;
    }

    if (statements.length === 1) {
        return `${statements[0]}`;
    }
}
