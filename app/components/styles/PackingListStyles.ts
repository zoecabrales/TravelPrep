import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    padding: 16,
  },
  addItemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  addItemInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    color: '#000000',
  },
  addButton: {
    backgroundColor: '#007AFF',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonDisabled: {
    backgroundColor: '#E5E5EA',
  },
  categoryFilters: {
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: 4,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    marginRight: 6,
    borderWidth: 1,
    borderColor: '#007AFF',
    height: 38,
  },
  selectedCategory: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  categoryButtonText: {
    fontSize: 13,
    color: '#007AFF',
    fontWeight: '500',
    marginLeft: 2,
  },
  selectedCategoryText: {
    color: '#FFFFFF',
  },
  list: {
    flex: 1,
  },
  listContent: {
    gap: 4,
    paddingBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    gap: 10,
    marginVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  checkboxContainer: {
    justifyContent: 'center',
  },
  itemContent: {
    flex: 1,
  },
  itemHeader: {
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  packedText: {
    textDecorationLine: 'line-through',
    color: '#8E8E93',
  },
  categoryText: {
    fontSize: 13,
    color: '#8E8E93',
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    padding: 2,
  },
  quantityButton: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },
  quantityText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
    marginHorizontal: 8,
    minWidth: 20,
    textAlign: 'center',
  },
  deleteButton: {
    padding: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#F2F2F7',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 4,
    width: '100%',
  },
  modalButtonText: {
    fontSize: 16,
    color: '#007AFF',
    textAlign: 'center',
  },
  modalCancelButton: {
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%',
  },
  modalCancelText: {
    fontSize: 16,
    color: '#FF3B30',
    textAlign: 'center',
  },
  summaryContainer: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E5EA',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#34C759',
    borderRadius: 2,
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 10,
    marginBottom: 8,
  },
  sortLabel: {
    fontSize: 14,
    color: '#8E8E93',
    marginRight: 8,
  },
  sortButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#F2F2F7',
    marginRight: 6,
  },
  selectedSort: {
    backgroundColor: '#007AFF',
  },
  sortButtonText: {
    fontSize: 12,
    color: '#8E8E93',
  },
  selectedSortText: {
    color: '#FFFFFF',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginBottom: 8,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#8E8E93',
    textAlign: 'center',
    marginBottom: 20,
  },
  emptyStateButton: {
    backgroundColor: '#F2F2F7',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  emptyStateButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  filtersContainer: {
    height: 50,
    marginBottom: 16,
  },
  metadataContainer: {
    marginBottom: 16,
  },
}); 