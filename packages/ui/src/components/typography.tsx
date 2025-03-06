import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

const typographyVariants = cva('mt-0', {
    variants: {
        variant: {
            h1: 'scroll-m-20 text-2xl md:text-3xl font-bold tracking-tight',
            h2: 'scroll-m-20 text-lg md:text-2xl font-semibold tracking-tight first:mt-0',
            h3: 'scroll-m-20 text-base md:text-xl font-semibold tracking-tight',
            h4: 'scroll-m-20 text-base md:text-lg font-semibold tracking-tight',
            highlightedBig: 'text-3xl md:text-4xl font-semibold tracking-tight',
            highlightedSmall: 'text-base md:text-xl font-semibold tracking-tight',
            subtitle: 'scroll-m-20 text-sm md:text-base font-semibold tracking-tight',
            small: 'text-sm',
            body: 'text-sm md:text-base',
            large: 'text-lg',
            p: 'text-sm md:text-base [&:not(:first-child)]:mt-6',
            blockquote: 'text-sm md:text-base mt-6 border-l-2 pl-6 italic',
            inlineCode:
                'text-sm md:text-base relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
            lead: 'text-xl text-muted-foreground',
            code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        },
    },
    defaultVariants: {
        variant: 'p',
    },
});

export interface TypographyProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
        VariantProps<typeof typographyVariants> {
    asChild?: boolean;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ className, variant, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'p';
        return <Comp className={cn(typographyVariants({ variant, className }))} ref={ref} {...props} />;
    },
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
