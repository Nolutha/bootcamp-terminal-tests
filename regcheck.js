export default function regCheck(regNo, regEnd) {
    if (regNo.endsWith(regEnd)) {
        return true;
    }
    return false;
}