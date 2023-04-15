import Foundation

@objc public class PublicKeyPinning: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
