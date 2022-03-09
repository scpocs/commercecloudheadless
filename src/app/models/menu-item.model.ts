export class CustomMenuItem {
    constructor() {
        this.Label = '';
        this.Icon = '';
        this.RouterLink = '';
        this.Childs = [];
        this.IsChildVisible = false;
        this.role = '';
    }
    Label: string;
    Icon?: string;
    RouterLink: string;
    Childs: CustomMenuItem[];
    IsChildVisible: boolean;
    role: string;
}
