import useLocalStorageObserved from './'
import { renderHook } from "@testing-library/react-hooks";


describe('useLocalStorageObserved', () => {
  it('updates every second', () => {
    const { result } = renderHook(() => useLocalStorageObserved('token'));

    expect(result.current).toBe(false);

  })
})
