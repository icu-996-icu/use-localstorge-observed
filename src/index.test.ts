import useLocalStorageObserved from './'
import { renderHook } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe('useLocalStorageObserved', () => {
  it('updates every second', () => {
    const { result } = renderHook(() => useLocalStorageObserved('token'));

    expect(result).toBe(false);

  })
})
