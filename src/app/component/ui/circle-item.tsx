import { MovingBorder } from "../animate/moving-border";
export const CircleItem = ({
    className,
    children,
    ...rest
    }: {
    className?: string;
    children?: React.ReactNode;
    }) => {
    return (
        <div
        className={`absolute left-1/2 -translate-x-1/2 -top-3 w-[340px] h-[340px] xl:w-[600px] xl:h-[600px] rounded-full bg-neutral-900 border-neutral-400 z-0 ${className}`}
        {...rest}
        >
        <MovingBorder
            rx="50%"
            ry="50%"
            color="#00fff7"
            strokeWidth={2}
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
                filter: "drop-shadow(0 0 4px #00fff7) drop-shadow(0 0 8px #00fff7)",
            }}
        />
        {children}
        </div>
    );
    }