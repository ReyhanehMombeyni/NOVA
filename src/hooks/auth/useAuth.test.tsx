import { renderHook, act } from "@testing-library/react";
import { useAuth } from "./useAuth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("useAuth", () => {
  const createTestQueryClient = () => new QueryClient();

  it("calls onSuccessIntro on successful mutation", async () => {
    const mockApiCall = jest.fn().mockResolvedValue({});
    const mockOnSuccess = jest.fn();
    const mockOnError = jest.fn();

    const queryClient = createTestQueryClient();
    const { result } = renderHook(
      () =>
        useAuth({
          apiCall: mockApiCall,
          onSuccessIntro: mockOnSuccess,
          onErrorIntro: mockOnError,
        }),
      {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        ),
      },
    );

    await act(async () => {
      result.current.mutate({
        identifier: "test-user",
        password: "password123",
      });
    });

    expect(mockApiCall).toHaveBeenCalled();
    expect(mockOnSuccess).toHaveBeenCalled();
  });

  it("calls onErrorIntro on error", async () => {
    const mockApiCall = jest.fn().mockRejectedValue(new Error("fail"));
    const mockOnSuccess = jest.fn();
    const mockOnError = jest.fn();

    const queryClient = createTestQueryClient();

    const { result } = renderHook(
      () =>
        useAuth({
          apiCall: mockApiCall,
          onSuccessIntro: mockOnSuccess,
          onErrorIntro: mockOnError,
        }),
      {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        ),
      },
    );

    await act(async () => {
      try {
        await result.current.mutate({
          identifier: "test-user",
          password: "password123",
        });
      } catch {}
    });

    expect(mockOnError).toHaveBeenCalled();
  });
});
