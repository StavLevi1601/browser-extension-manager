export interface ExtensionCardProps {
    name: string;
    description: string;
    icon: React.ReactNode;
    colorIcon: string;
    enabled: boolean;
    buttonText?: string;
    onToggle: () => void;
    onRemove: () => void;
}
