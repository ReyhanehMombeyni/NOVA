import { loginApi } from "./authApi";

describe('login api test', () => {
    beforeEach(() => {
        global.fetch= jest.fn();
    });

    it('should call API and return data on success!', async () => {
        const mockResponse= { token: 'abc123' };
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockResponse),
        });

        const user= { identifier: 'test@gmail.com', password: '123456' };
        const data= await loginApi(user);

        expect(fetch).toHaveBeenCalledWith('http://localhost:1337/api/auth/local', expect.objectContaining({
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        }));
        expect(data).toEqual(mockResponse);
    })

    it('should throw error on failed response!', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
        })

        const user= { identifier: 'test@gmail.com', password: '123456' };
        await expect(loginApi(user)).rejects.toThrow('Account login failed. Please check your information and internet!');

    })
})