import * as z from 'zod'

export const LoginSchema = z.object({
  identifier: z.email('Please enter a valid email address!').min(1, 'Please enter an email Address!'),
  password: z.string().min(6, 'Password must be at least 6 characters long!'),
});

export type LoginDataType = z.infer<typeof LoginSchema>;

export const SignupSchema = z.object({
  username: z.string().min(4, 'username must be at least 4 character long!')
            .max(20, "Username must be at most 20 character long!")
            .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  email: z.email('Please enter a valid email address!').min(1, 'Please enter an email Address!').toLowerCase().trim(),
  password: z.string().min(6, 'Password must be at least 6 characters long!'),
  confirmPassword: z.string(),
})
.superRefine(({password, confirmPassword}, ctx) => {

  if(password !== confirmPassword) {
    ctx.addIssue({
      code: 'custom',
      message: 'Password is not the same as Confirm Password!',
      path: ['confirmPassword'],
    })
  }
})

export type SignupDataType = z.infer<typeof SignupSchema>;
