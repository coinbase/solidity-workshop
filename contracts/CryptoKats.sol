pragma solidity ^0.4.24;

import "./Ownable.sol";

/**
 * @title ERC721 Non-Fungible Token Standard basic implementation
 * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
 */
contract CryptoKats is Ownable {

  /// @dev The Birth event is fired whenever a new kitten comes into existence. This obviously
  ///  includes any time a cat is created through the giveBirth method, but it is also called
  ///  when a new gen0 cat is created.
  event Birth(address owner, uint256 kittyId, uint256 matronId, uint256 sireId, uint256 genes);

  /// @dev Transfer event as defined in current draft of ERC721. Emitted every time a kitten
  ///  ownership is assigned, including births.
  event Transfer(address from, address to, uint256 tokenId);

  /**
   * CryptoKat data structure
   */
  struct Kat {
    uint32 color;
    uint16 generation;
    uint256 motherId;
    uint256 fatherId;
  }

  Kat[] kats;

  // Mapping from token ID to owner
  mapping (uint256 => address) private _tokenOwner;

  // Mapping from owner to number of owned token
  mapping (address => uint256) private _ownedTokensCount;

  constructor() public {
    // TODO: fill in constructor body
  }

  /**
   * @dev Gets the balance of the specified address
   * @param owner address to query the balance of
   * @return uint256 representing the amount owned by the passed address
   */
  function balanceOf(address owner) public view returns (uint256) {
    // TODO: ensure the owner isn't address 0x0
  }

  /**
   * @dev Gets the owner of the specified token ID
   * @param tokenId uint256 ID of the token to query the owner of
   * @return owner address currently marked as the owner of the given token ID
   */
  function ownerOf(uint256 tokenId) public view returns (address) {
    // TODO: return the owner of the provided token
  }

  function getKat(uint256 katId) public view returns (uint32 color, uint16 generation, uint256 motherId, uint256 fatherId) {
    // TODO: return the color, generation, motherId, and fatherId
  }

  /**
   * @dev Transfers the ownership of a given token ID to another address
   * Usage of this method is discouraged, use `safeTransferFrom` whenever possible
   * Requires the msg sender to be the owner, approved, or operator
   * @param to address to receive the ownership of the given token ID
   * @param tokenId uint256 ID of the token to be transferred
  */
  function transfer(
    address to,
    uint256 tokenId
  )
    public
  {
    // TODO: transfer the token from the sender to the to address
  }

  function birth(uint32 color) public {
    require(msg.sender == address(this));
    kats.push(Kat(color, 0, 0, 0));
    emit Birth(msg.sender, kats.length - 1, 0, 0, color);
    _mint(msg.sender, kats.length - 1);
  }

  function _transferFrom(address from, address to, uint256 tokenId) internal {
    require(from == _tokenOwner[tokenId]);
    require(to != address(0));

    _removeTokenFrom(from, tokenId);
    _addTokenTo(to, tokenId);

    emit Transfer(from, to, tokenId);
  }

  /**
   * @dev Internal function to mint a new token
   * Reverts if the given token ID already exists
   * @param to The address that will own the minted token
   * @param tokenId uint256 ID of the token to be minted by the msg.sender
   */
  function _mint(address to, uint256 tokenId) internal {
    require(to != address(0));
    _addTokenTo(to, tokenId);
    emit Transfer(address(0), to, tokenId);
  }

  /**
   * @dev Internal function to add a token ID to the list of a given address
   * @param to address representing the new owner of the given token ID
   * @param tokenId uint256 ID of the token to be added to the tokens list of the given address
   */
  function _addTokenTo(address to, uint256 tokenId) internal {
    require(_tokenOwner[tokenId] == address(0));
    _tokenOwner[tokenId] = to;
    _ownedTokensCount[to]++;
  }

  /**
   * @dev Internal function to remove a token ID from the list of a given address
   * @param from address representing the previous owner of the given token ID
   * @param tokenId uint256 ID of the token to be removed from the tokens list of the given address
   */
  function _removeTokenFrom(address from, uint256 tokenId) internal {
    require(ownerOf(tokenId) == from);
    _ownedTokensCount[from]--;
    _tokenOwner[tokenId] = address(0);
  }
}
