export function isAuthenticated(): boolean {
    const token = sessionStorage.getItem("token");
    return !!token;
}
