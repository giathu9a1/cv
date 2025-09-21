'use client';
import React from 'react';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { cn } from '~/lib/utils';
import { Textarea } from './ui/textarea';
import { toast, Toaster } from 'sonner';
import { FaCircleCheck } from 'react-icons/fa6';
// import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from '@tabler/icons-react';
import { MdError } from 'react-icons/md';

export default function SignupFormDemo() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const res = await fetch('https://formspree.io/f/mvgbewgw', {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        });

        if (res.ok) {
            toast.success('Thanks for reaching out!', {
                icon: <FaCircleCheck className="text-emerald-600" size={20} />,
                description: 'I’ll reply soon.',
            });
            form.reset();
        } else {
            toast.success('Failed to send. Try again later.', {
                icon: <MdError className="text-emerald-600" size={20} />,
            });
        }
    };

    return (
        <div className="shadow-input mx-auto w-full rounded-none md:rounded-2xl">
            <Toaster position="top-center" />
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Send a Message</h2>
            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

            <form className="my-8" onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">Name</Label>
                        <Input id="firstname" placeholder="Your name" name="name" type="text" className="shadow-sm" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Your email" name="email" type="email" className="shadow-sm" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Subject" name="subject" type="text" className="shadow-sm" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message" name="message" className="shadow-sm" />
                </LabelInputContainer>

                <button
                    className="group/btn cursor-pointer relative block h-12 w-full rounded-md bg-gradient-to-br from-gray-800 to-[var(--primary-color)] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-100 dark:from-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                    type="submit"
                >
                    Send Message
                    <BottomGradient />
                </button>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={cn('flex w-full flex-col space-y-2', className)}>{children}</div>;
};
