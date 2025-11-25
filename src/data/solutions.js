export const solutions = [
  // ===== ARRAY SOLUTIONS =====
  
  // Easy (15)
  {
    problemName: "Two Sum",
    author: "Algorithm Master",
    explanation: "Use a hash map to store numbers and their indices. For each number, calculate its complement (target - current) and check if it exists in the map. This avoids O(n²) brute force.",
    solution: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (map.find(complement) != map.end()) {
                return {map[complement], i};
            }
            map[nums[i]] = i;
        }
        return {};
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "CodeReviewer42",
        content: "Elegant solution! Hash map eliminates nested loops. Each lookup is O(1).",
      },
      {
        author: "PythonFan",
        content: "In Python, this can be done even more concisely with enumerate() and dictionary.",
      },
      {
        author: "NewCoder",
        content: "What if there are duplicate numbers? The hash map approach handles this well since we store indices.",
      },
      {
        author: "OptimizationExpert",
        content: "Consider adding an early return if no solution is possible, though the problem guarantees exactly one solution.",
      }
    ]
  },

  {
    problemName: "Best Time to Buy and Sell Stock",
    author: "Trading Pro",
    explanation: "Track the minimum price seen so far and calculate maximum profit by comparing current price with minimum.",
    solution: `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minPrice = INT_MAX;
        int maxProfit = 0;
        
        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
        return maxProfit;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "StockTrader",
        content: "Clean one-pass solution! This is essentially Kadane's algorithm for maximum subarray.",
      },
      {
        author: "AlgorithmEnthusiast",
        content: "Note that we can only buy once and sell once. For multiple transactions, we'd need a different approach.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of INT_MAX to initialize minPrice. Makes the first comparison always true.",
      },
      {
        author: "PythonDev",
        content: "In Python, we can use float('inf') instead of INT_MAX for similar initialization."
      }
    ]
  },

  {
    problemName: "Contains Duplicate",
    author: "Set Master",
    explanation: "Use a hash set to track seen numbers. If we encounter a number already in the set, we found a duplicate.",
    solution: `class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> seen;
        for (int num : nums) {
            if (seen.find(num) != seen.end()) {
                return true;
            }
            seen.insert(num);
        }
        return false;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "SetExpert",
        content: "Hash set provides O(1) lookups on average. Much better than sorting which would be O(n log n).",
      },
      {
        author: "MemoryOptimizer",
        content: "We could also sort and check adjacent elements for O(1) space, but O(n log n) time.",
      },
      {
        author: "PythonFan",
        content: "In Python, this is one line: return len(nums) != len(set(nums))",
      },
      {
        author: "BigOAnalyst",
        content: "For very large n, the hash set might have collisions but average case is still O(n)."
      }
    ]
  },

  {
    problemName: "Remove Duplicates from Sorted Array",
    author: "Two Pointer Pro",
    explanation: "Use two pointers - one for the current position to place unique elements, and one to iterate through the array.",
    solution: `class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty()) return 0;
        
        int i = 0;
        for (int j = 1; j < nums.size(); j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        return i + 1;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "PointerMaster",
        content: "Classic two-pointer technique! i tracks the last unique element position.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Good check for empty array at the beginning. Always important for robustness.",
      },
      {
        author: "AlgorithmTeacher",
        content: "This works because the array is sorted. For unsorted array, we'd need a different approach.",
      },
      {
        author: "CodeStyleGuru",
        content: "Clean and efficient. The in-place modification is exactly what the problem asks for."
      }
    ]
  },

  {
    problemName: "Move Zeroes",
    author: "Array Manipulator",
    explanation: "Use two pointers - one to find non-zero elements and one to place them in order, then fill remaining positions with zeroes.",
    solution: `class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int nonZeroIndex = 0;
        
        // Move all non-zero elements to the front
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != 0) {
                nums[nonZeroIndex++] = nums[i];
            }
        }
        
        // Fill remaining positions with zeroes
        for (int i = nonZeroIndex; i < nums.size(); i++) {
            nums[i] = 0;
        }
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "OptimizationExpert",
        content: "Efficient two-pass solution! First pass collects non-zeroes, second pass fills zeroes.",
      },
      {
        author: "OnePassFan",
        content: "We could also do this in one pass with a swap operation, but this is more readable.",
      },
      {
        author: "CodeReviewer42",
        content: "Good variable naming - nonZeroIndex clearly indicates its purpose.",
      },
      {
        author: "PythonDev",
        content: "In Python, we can use list comprehension: nums[:] = [x for x in nums if x != 0] + [0]*nums.count(0)"
      }
    ]
  },

  {
    problemName: "Plus One",
    author: "Digit Expert",
    explanation: "Start from the end and handle carry. If all digits become 9, we need to add an extra digit at the beginning.",
    solution: `class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int n = digits.size();
        
        for (int i = n - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }
            digits[i] = 0;
        }
        
        // If we're here, all digits were 9
        digits.insert(digits.begin(), 1);
        return digits;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "MathWizard",
        content: "Smart approach! Handles the carry propagation elegantly without extra variables.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Good handling of the edge case where all digits are 9 and we need to add a new digit.",
      },
      {
        author: "CodeSimplicity",
        content: "The early return when digits[i] < 9 makes this very efficient for most cases.",
      },
      {
        author: "AlternativeThinker",
        content: "We could also convert to number and back, but that might cause overflow for large arrays."
      }
    ]
  },

  {
    problemName: "Single Number",
    author: "Bit Manipulation Guru",
    explanation: "Use XOR operation. Since a XOR a = 0 and a XOR 0 = a, all duplicate numbers cancel out, leaving the single number.",
    solution: `class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int result = 0;
        for (int num : nums) {
            result ^= num;
        }
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "BitMaster",
        content: "Beautiful bit manipulation! XOR is perfect for this problem.",
      },
      {
        author: "MathGeek",
        content: "This works because XOR is commutative and associative. The order doesn't matter.",
      },
      {
        author: "MemoryOptimizer",
        content: "O(1) space solution! No extra data structures needed.",
      },
      {
        author: "PythonFan",
        content: "In Python, we can use reduce from functools: return reduce(lambda x, y: x ^ y, nums)"
      }
    ]
  },

  {
    problemName: "Intersection of Two Arrays II",
    author: "Hash Map Specialist",
    explanation: "Use a hash map to count frequencies of numbers in the smaller array, then iterate through the other array to find common elements.",
    solution: `class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        if (nums1.size() > nums2.size()) {
            return intersect(nums2, nums1);
        }
        
        unordered_map<int, int> freq;
        vector<int> result;
        
        // Count frequencies in smaller array
        for (int num : nums1) {
            freq[num]++;
        }
        
        // Find common elements
        for (int num : nums2) {
            if (freq.find(num) != freq.end() && freq[num] > 0) {
                result.push_back(num);
                freq[num]--;
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n + m), Space: O(min(n, m))",
    comments: [
      {
        author: "OptimizationExpert",
        content: "Smart to process the smaller array first to minimize space usage!",
      },
      {
        author: "AlternativeSolver",
        content: "We could also sort both arrays and use two pointers for O(1) space (but O(n log n) time).",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of frequency counting to handle duplicates correctly.",
      },
      {
        author: "BigOAnalyst",
        content: "Space complexity is O(min(n,m)) which is optimal for this approach."
      }
    ]
  },

  {
    problemName: "Valid Sudoku",
    author: "Grid Validator",
    explanation: "Use three sets of hash sets to track seen numbers in rows, columns, and 3x3 sub-boxes.",
    solution: `class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        vector<unordered_set<char>> rows(9), cols(9), boxes(9);
        
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                char num = board[i][j];
                if (num == '.') continue;
                
                int boxIndex = (i / 3) * 3 + (j / 3);
                
                if (rows[i].count(num) || cols[j].count(num) || boxes[boxIndex].count(num)) {
                    return false;
                }
                
                rows[i].insert(num);
                cols[j].insert(num);
                boxes[boxIndex].insert(num);
            }
        }
        return true;
    }
};`,
    notes: "Time: O(1) since board is fixed 9x9, Space: O(1)",
    comments: [
      {
        author: "SudokuMaster",
        content: "Clean solution! The box index calculation is clever: (i/3)*3 + (j/3).",
      },
      {
        author: "SpaceOptimizer",
        content: "We could use bit masking to reduce space further, but this is more readable.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of empty cells with continue statement.",
      },
      {
        author: "AlternativeThinker",
        content: "We could also use arrays of booleans instead of sets for potentially better performance."
      }
    ]
  },

  {
    problemName: "Rotate Array",
    author: "Array Rotator",
    explanation: "Three-step reversal: reverse entire array, then reverse first k elements, then reverse remaining elements.",
    solution: `class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        k = k % n; // Handle k larger than array size
        
        // Three-step reversal
        reverse(nums.begin(), nums.end());
        reverse(nums.begin(), nums.begin() + k);
        reverse(nums.begin() + k, nums.end());
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "AlgorithmMaster",
        content: "Elegant reversal technique! This is the classic O(1) space solution.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Important to handle k > n with modulo operation. Many forget this!",
      },
      {
        author: "AlternativeSolver",
        content: "We could also use extra array or cyclic replacements, but this is most space-efficient.",
      },
      {
        author: "CodeSimplicity",
        content: "Using STL reverse makes the code clean and readable."
      }
    ]
  },

  {
    problemName: "Find All Numbers Disappeared in an Array",
    author: "Marking Pro",
    explanation: "Use the array itself as a marker by making numbers negative at positions corresponding to seen numbers.",
    solution: `class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        vector<int> result;
        
        // Mark positions as negative
        for (int i = 0; i < nums.size(); i++) {
            int index = abs(nums[i]) - 1;
            if (nums[index] > 0) {
                nums[index] = -nums[index];
            }
        }
        
        // Find positive numbers (indices of missing numbers)
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] > 0) {
                result.push_back(i + 1);
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1) excluding result",
    comments: [
      {
        author: "SpaceOptimizer",
        content: "Brilliant in-place marking! No extra space needed for tracking.",
      },
      {
        author: "AlgorithmEnthusiast",
        content: "This works because all numbers are between 1 and n, and array size is n.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of abs() to handle already negative numbers in the marking phase.",
      },
      {
        author: "PythonDev",
        content: "In Python, we'd need to be careful since we can't modify the array if it's given as immutable."
      }
    ]
  },

  {
    problemName: "Max Consecutive Ones",
    author: "Counter Expert",
    explanation: "Iterate through array, count consecutive ones, and track the maximum count.",
    solution: `class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int maxCount = 0;
        int currentCount = 0;
        
        for (int num : nums) {
            if (num == 1) {
                currentCount++;
                maxCount = max(maxCount, currentCount);
            } else {
                currentCount = 0;
            }
        }
        
        return maxCount;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "SimplicityMaster",
        content: "Straightforward and efficient! Single pass with O(1) space.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of max() to avoid if-else for updating maxCount.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles empty array and all zeros correctly.",
      },
      {
        author: "PythonFan",
        content: "In Python, we could use groupby from itertools, but this is more readable."
      }
    ]
  },

  {
    problemName: "Reshape the Matrix",
    author: "Matrix Reshaper",
    explanation: "Flatten the matrix row by row, then fill the new matrix with the flattened elements.",
    solution: `class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        int m = mat.size(), n = mat[0].size();
        
        // Check if reshape is possible
        if (m * n != r * c) {
            return mat;
        }
        
        vector<vector<int>> result(r, vector<int>(c));
        int index = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int newRow = index / c;
                int newCol = index % c;
                result[newRow][newCol] = mat[i][j];
                index++;
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n) for result",
    comments: [
      {
        author: "MatrixMaster",
        content: "Clean index calculation using division and modulo!",
      },
      {
        author: "EdgeCaseHunter",
        content: "Important to check if reshape is possible at the beginning.",
      },
      {
        author: "AlternativeThinker",
        content: "We could also use a single loop with index conversion formulas.",
      },
      {
        author: "CodeReviewer42",
        content: "Good variable naming - m, n, r, c follow conventional matrix notation."
      }
    ]
  },

  {
    problemName: "Pascal's Triangle",
    author: "Math Generator",
    explanation: "Each row is generated by summing adjacent elements from the previous row, with 1s at the ends.",
    solution: `class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> triangle;
        
        for (int i = 0; i < numRows; i++) {
            vector<int> row(i + 1, 1); // Initialize with 1s
            
            // Calculate inner elements (skip first and last)
            for (int j = 1; j < i; j++) {
                row[j] = triangle[i-1][j-1] + triangle[i-1][j];
            }
            
            triangle.push_back(row);
        }
        
        return triangle;
    }
};`,
    notes: "Time: O(n²), Space: O(n²)",
    comments: [
      {
        author: "MathWizard",
        content: "Perfect implementation of Pascal's triangle generation!",
      },
      {
        author: "CodeReviewer42",
        content: "Good initialization of each row with 1s, then filling inner elements.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles numRows = 0 correctly by returning empty vector.",
      },
      {
        author: "AlternativeThinker",
        content: "We could also use combinatorial formula with nCr, but this is more straightforward."
      }
    ]
  },

  {
    problemName: "Missing Number",
    author: "Math Genius",
    explanation: "Use Gauss formula: sum of first n numbers is n(n+1)/2. Subtract actual sum to find missing number.",
    solution: `class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int n = nums.size();
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;
        
        for (int num : nums) {
            actualSum += num;
        }
        
        return expectedSum - actualSum;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "MathGeek",
        content: "Clever use of mathematical formula! No extra space needed.",
      },
      {
        author: "AlternativeSolver",
        content: "We could also use XOR with all numbers from 0 to n, similar to Single Number problem.",
      },
      {
        author: "CodeReviewer42",
        content: "Simple and efficient. Handles overflow well for given constraints.",
      },
      {
        author: "PythonFan",
        content: "In Python, we could use: return sum(range(len(nums)+1)) - sum(nums)"
      }
    ]
  },

  // Medium (20)
  {
    problemName: "Product of Array Except Self",
    author: "Prefix-Suffix Master",
    explanation: "Use prefix and suffix products. First pass calculates left products, second pass calculates right products and combines.",
    solution: `class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> result(n, 1);
        
        // Calculate left products
        int left = 1;
        for (int i = 0; i < n; i++) {
            result[i] = left;
            left *= nums[i];
        }
        
        // Calculate right products and combine
        int right = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= right;
            right *= nums[i];
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1) excluding result",
    comments: [
      {
        author: "AlgorithmMaster",
        content: "Brilliant O(n) time and O(1) space solution! No division used.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean two-pass approach. First pass left products, second pass right products.",
      },
      {
        author: "SpaceOptimizer",
        content: "Using the result array for intermediate storage is smart.",
      },
      {
        author: "InterviewExpert",
        content: "This is a classic interview problem. Important to know both division and non-division solutions."
      }
    ]
  },

  {
    problemName: "Maximum Subarray",
    author: "Kadane's Algorithm Expert",
    explanation: "Kadane's algorithm: track current sum and maximum sum. Reset current sum when it becomes negative.",
    solution: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];
        
        for (int i = 1; i < nums.size(); i++) {
            currentSum = max(nums[i], currentSum + nums[i]);
            maxSum = max(maxSum, currentSum);
        }
        
        return maxSum;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "AlgorithmHistorian",
        content: "Classic Kadane's algorithm! One of the most famous DP problems.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean implementation. The key insight is resetting when current sum goes negative.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles all negative arrays correctly by starting with first element.",
      },
      {
        author: "AlternativeThinker",
        content: "We could also use divide and conquer for O(n log n), but this is optimal."
      }
    ]
  },

  {
    problemName: "Maximum Product Subarray",
    author: "DP Specialist",
    explanation: "Track both maximum and minimum products at each position, since negative numbers can make minimum become maximum.",
    solution: `class Solution {
public:
    int maxProduct(vector<int>& nums) {
        if (nums.empty()) return 0;
        
        int maxProd = nums[0];
        int minProd = nums[0];
        int result = nums[0];
        
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] < 0) {
                swap(maxProd, minProd);
            }
            
            maxProd = max(nums[i], maxProd * nums[i]);
            minProd = min(nums[i], minProd * nums[i]);
            
            result = max(result, maxProd);
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "DPExpert",
        content: "Smart to track both max and min! Negative numbers flip the relationship.",
      },
      {
        author: "CodeReviewer42",
        content: "The swap when encountering negative number is the key insight.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles zeros correctly since max() and min() will reset at zero.",
      },
      {
        author: "AlternativeThinker",
        content: "We could also do two passes (forward and backward) to handle negative counts."
      }
    ]
  },

  {
    problemName: "Find Minimum in Rotated Sorted Array",
    author: "Binary Search Pro",
    explanation: "Modified binary search: compare mid element with right element to determine which side has the minimum.",
    solution: `class Solution {
public:
    int findMin(vector<int>& nums) {
        int left = 0, right = nums.size() - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] > nums[right]) {
                // Minimum is in right half
                left = mid + 1;
            } else {
                // Minimum is in left half (including mid)
                right = mid;
            }
        }
        
        return nums[left];
    }
};`,
    notes: "Time: O(log n), Space: O(1)",
    comments: [
      {
        author: "BinarySearchMaster",
        content: "Clean binary search adaptation for rotated array!",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of comparing with right element instead of left to handle duplicates.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles non-rotated array correctly (when nums[0] is minimum).",
      },
      {
        author: "AlternativeThinker",
        content: "We could also compare with left element, but comparing with right is more robust."
      }
    ]
  },

  {
    problemName: "Search in Rotated Sorted Array",
    author: "Rotation Searcher",
    explanation: "Modified binary search: first find which side is sorted, then check if target is in the sorted side.",
    solution: `class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            }
            
            // Check if left side is sorted
            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else { // Right side is sorted
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        
        return -1;
    }
};`,
    notes: "Time: O(log n), Space: O(1)",
    comments: [
      {
        author: "BinarySearchExpert",
        content: "Elegant solution! The key is determining which half is properly sorted.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of both cases: left sorted and right sorted.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles single element and two element arrays correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could first find the pivot, then do binary search on the appropriate half."
      }
    ]
  },
  {
    problemName: "3Sum",
    author: "Two Pointer Master",
    explanation: "Sort the array, then for each element, use two pointers to find pairs that sum to -current element. Skip duplicates to avoid duplicate triplets.",
    solution: `class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> result;
        sort(nums.begin(), nums.end());
        int n = nums.size();
        
        for (int i = 0; i < n - 2; i++) {
            // Skip duplicates
            if (i > 0 && nums[i] == nums[i-1]) continue;
            
            int left = i + 1, right = n - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    result.push_back({nums[i], nums[left], nums[right]});
                    // Skip duplicates
                    while (left < right && nums[left] == nums[left+1]) left++;
                    while (left < right && nums[right] == nums[right-1]) right--;
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    }
};`,
    notes: "Time: O(n²), Space: O(1) excluding result",
    comments: [
      {
        author: "TwoPointerExpert",
        content: "Classic two-pointer approach after sorting! Handles duplicates elegantly.",
      },
      {
        author: "CodeReviewer42",
        content: "Good duplicate skipping logic - both for the outer loop and inner pointers.",
      },
      {
        author: "OptimizationExpert",
        content: "Early termination could be added: if nums[i] > 0, break since sorted array.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use hash set for O(n²) time with O(n) space, but sorting is more efficient."
      }
    ]
  },

  {
    problemName: "Container With Most Water",
    author: "Two Pointer Pro",
    explanation: "Use two pointers at both ends. Always move the pointer with smaller height, as that's the limiting factor.",
    solution: `class Solution {
public:
    int maxArea(vector<int>& height) {
        int left = 0, right = height.size() - 1;
        int maxArea = 0;
        
        while (left < right) {
            int currentArea = min(height[left], height[right]) * (right - left);
            maxArea = max(maxArea, currentArea);
            
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxArea;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "GreedyAlgoExpert",
        content: "Greedy approach works perfectly! Always move the shorter line inward.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean and intuitive. The area calculation is straightforward.",
      },
      {
        author: "ProofMaster",
        content: "This works because moving the longer line cannot increase the area, only moving shorter line might.",
      },
      {
        author: "AlternativeThinker",
        content: "Brute force would be O(n²), but this greedy approach gives O(n)."
      }
    ]
  },

  {
    problemName: "Merge Intervals",
    author: "Interval Master",
    explanation: "Sort intervals by start time, then merge overlapping intervals by comparing with the last merged interval.",
    solution: `class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        if (intervals.empty()) return {};
        
        sort(intervals.begin(), intervals.end());
        vector<vector<int>> merged;
        merged.push_back(intervals[0]);
        
        for (int i = 1; i < intervals.size(); i++) {
            vector<int>& last = merged.back();
            if (intervals[i][0] <= last[1]) {
                // Overlapping, merge them
                last[1] = max(last[1], intervals[i][1]);
            } else {
                // Non-overlapping, add new interval
                merged.push_back(intervals[i]);
            }
        }
        
        return merged;
    }
};`,
    notes: "Time: O(n log n), Space: O(1) excluding result",
    comments: [
      {
        author: "SortingExpert",
        content: "Sorting makes the problem much easier! Then it's just linear merging.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of reference to the last merged interval for efficient updates.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles empty input and single interval correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use a sweep line algorithm, but sorting is simpler and efficient."
      }
    ]
  },

  {
    problemName: "Insert Interval",
    author: "Interval Inserter",
    explanation: "Three phases: add all intervals before new interval, merge overlapping intervals with new interval, add all intervals after.",
    solution: `class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        vector<vector<int>> result;
        int i = 0, n = intervals.size();
        
        // Add all intervals before newInterval
        while (i < n && intervals[i][1] < newInterval[0]) {
            result.push_back(intervals[i]);
            i++;
        }
        
        // Merge overlapping intervals
        while (i < n && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = min(newInterval[0], intervals[i][0]);
            newInterval[1] = max(newInterval[1], intervals[i][1]);
            i++;
        }
        result.push_back(newInterval);
        
        // Add remaining intervals
        while (i < n) {
            result.push_back(intervals[i]);
            i++;
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1) excluding result",
    comments: [
      {
        author: "ThreePhaseExpert",
        content: "Clean three-phase approach! No sorting needed since intervals are already sorted.",
      },
      {
        author: "CodeReviewer42",
        content: "Efficient linear scan. Each interval is processed exactly once.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where newInterval is at beginning, middle, or end correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use binary search to find insertion point, but linear scan is simpler."
      }
    ]
  },

  {
    problemName: "Non-overlapping Intervals",
    author: "Greedy Interval Selector",
    explanation: "Sort by end time, then greedily select intervals. When conflict occurs, remove the interval with larger end time.",
    solution: `class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        if (intervals.empty()) return 0;
        
        sort(intervals.begin(), intervals.end(), [](const vector<int>& a, const vector<int>& b) {
            return a[1] < b[1];
        });
        
        int count = 0;
        int lastEnd = intervals[0][1];
        
        for (int i = 1; i < intervals.size(); i++) {
            if (intervals[i][0] < lastEnd) {
                // Overlapping, remove current interval
                count++;
            } else {
                // Non-overlapping, update lastEnd
                lastEnd = intervals[i][1];
            }
        }
        
        return count;
    }
};`,
    notes: "Time: O(n log n), Space: O(1)",
    comments: [
      {
        author: "GreedyAlgorithmExpert",
        content: "Classic greedy interval scheduling! Always pick the interval that ends earliest.",
      },
      {
        author: "CodeReviewer42",
        content: "Smart to sort by end time rather than start time for this problem.",
      },
      {
        author: "ProofMaster",
        content: "This maximizes the number of non-overlapping intervals, which minimizes removals.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DP for O(n²) solution, but greedy is optimal and faster."
      }
    ]
  },

  {
    problemName: "4Sum",
    author: "K-Sum Specialist",
    explanation: "Extend 3Sum approach: two outer loops, then two pointers. Handle duplicates carefully.",
    solution: `class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        vector<vector<int>> result;
        sort(nums.begin(), nums.end());
        int n = nums.size();
        
        for (int i = 0; i < n - 3; i++) {
            if (i > 0 && nums[i] == nums[i-1]) continue;
            
            for (int j = i + 1; j < n - 2; j++) {
                if (j > i + 1 && nums[j] == nums[j-1]) continue;
                
                int left = j + 1, right = n - 1;
                while (left < right) {
                    long long sum = (long long)nums[i] + nums[j] + nums[left] + nums[right];
                    if (sum == target) {
                        result.push_back({nums[i], nums[j], nums[left], nums[right]});
                        while (left < right && nums[left] == nums[left+1]) left++;
                        while (left < right && nums[right] == nums[right-1]) right--;
                        left++;
                        right--;
                    } else if (sum < target) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
        }
        return result;
    }
};`,
    notes: "Time: O(n³), Space: O(1) excluding result",
    comments: [
      {
        author: "KSumMaster",
        content: "Generalizes 3Sum approach well! Careful duplicate handling is key.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of long long to prevent integer overflow for large numbers.",
      },
      {
        author: "OptimizationExpert",
        content: "Early pruning: break if nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target, etc.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use hash map for O(n³) average case, but worst case still O(n³)."
      }
    ]
  },

  {
    problemName: "Jump Game",
    author: "Greedy Jumper",
    explanation: "Track the farthest reachable position. If at any point current position exceeds farthest reachable, return false.",
    solution: `class Solution {
public:
    bool canJump(vector<int>& nums) {
        int farthest = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (i > farthest) {
                return false;
            }
            farthest = max(farthest, i + nums[i]);
            if (farthest >= nums.size() - 1) {
                return true;
            }
        }
        return true;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "GreedyAlgoExpert",
        content: "Elegant greedy solution! Track the maximum reachable index.",
      },
      {
        author: "CodeReviewer42",
        content: "Early termination when farthest reaches last index improves efficiency.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles single element array and array with zeros correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DP with O(n²) time, but greedy gives optimal O(n)."
      }
    ]
  },

  {
    problemName: "Jump Game II",
    author: "Greedy Jump Optimizer",
    explanation: "Track current jump end and farthest reachable. When we reach jump end, increment jumps and update jump end to farthest.",
    solution: `class Solution {
public:
    int jump(vector<int>& nums) {
        int jumps = 0, currentEnd = 0, farthest = 0;
        
        for (int i = 0; i < nums.size() - 1; i++) {
            farthest = max(farthest, i + nums[i]);
            
            if (i == currentEnd) {
                jumps++;
                currentEnd = farthest;
                
                if (currentEnd >= nums.size() - 1) {
                    break;
                }
            }
        }
        
        return jumps;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "GreedyAlgorithmMaster",
        content: "Brilliant BFS-like approach! Each 'level' represents one jump.",
      },
      {
        author: "CodeReviewer42",
        content: "Smart to stop at nums.size()-1 since we don't need to jump from last position.",
      },
      {
        author: "OptimizationExpert",
        content: "Early break when currentEnd reaches last index improves performance.",
      },
      {
        author: "AlternativeThinker",
        content: "DP solution would be O(n²), but this greedy gives optimal O(n)."
      }
    ]
  },

  {
    problemName: "Find the Duplicate Number",
    author: "Cycle Detection Pro",
    explanation: "Treat array as linked list where nums[i] is next pointer. Use Floyd's cycle detection (tortoise and hare).",
    solution: `class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        // Phase 1: Find intersection point
        int slow = nums[0];
        int fast = nums[0];
        
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow != fast);
        
        // Phase 2: Find cycle entrance (duplicate)
        slow = nums[0];
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }
        
        return slow;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "CycleDetectionExpert",
        content: "Brilliant application of Floyd's cycle detection! Treats array as linked list.",
      },
      {
        author: "CodeReviewer42",
        content: "Two-phase approach: find meeting point, then find cycle entrance.",
      },
      {
        author: "MathWizard",
        content: "Works because numbers are 1 to n, so indices are valid and there must be a cycle.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use binary search on value space for O(n log n), but this is O(n)."
      }
    ]
  },

  {
    problemName: "Subarray Sum Equals K",
    author: "Prefix Sum Master",
    explanation: "Use hash map to store prefix sums and their frequencies. For each position, check if (prefixSum - k) exists in map.",
    solution: `class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        unordered_map<int, int> prefixSumCount;
        prefixSumCount[0] = 1; // Empty subarray has sum 0
        int count = 0, prefixSum = 0;
        
        for (int num : nums) {
            prefixSum += num;
            if (prefixSumCount.find(prefixSum - k) != prefixSumCount.end()) {
                count += prefixSumCount[prefixSum - k];
            }
            prefixSumCount[prefixSum]++;
        }
        
        return count;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "PrefixSumExpert",
        content: "Classic prefix sum + hash map approach! Handles negative numbers perfectly.",
      },
      {
        author: "CodeReviewer42",
        content: "Important to initialize with prefixSumCount[0] = 1 for subarrays starting at index 0.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where k=0 and arrays with negative numbers correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "Brute force would be O(n²), but this optimal solution is O(n)."
      }
    ]
  },

  {
    problemName: "Next Permutation",
    author: "Permutation Algorithmist",
    explanation: "Find first decreasing element from right, swap with next larger element, then reverse the suffix to get next permutation.",
    solution: `class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int n = nums.size();
        int i = n - 2;
        
        // Find first decreasing element from right
        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;
        }
        
        if (i >= 0) {
            // Find element just larger than nums[i]
            int j = n - 1;
            while (j >= 0 && nums[j] <= nums[i]) {
                j--;
            }
            swap(nums[i], nums[j]);
        }
        
        // Reverse the suffix
        reverse(nums.begin() + i + 1, nums.end());
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "CombinatoricsExpert",
        content: "Implements Narayana's algorithm for next permutation! Classic approach.",
      },
      {
        author: "CodeReviewer42",
        content: "Three steps: find pivot, find successor, reverse suffix. Clean implementation.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles last permutation correctly by reversing entire array.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use STL next_permutation, but understanding the algorithm is key."
      }
    ]
  },

  {
    problemName: "Spiral Matrix",
    author: "Matrix Traversal Pro",
    explanation: "Use four boundaries (top, bottom, left, right) and traverse in four directions until boundaries cross.",
    solution: `class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> result;
        if (matrix.empty()) return result;
        
        int top = 0, bottom = matrix.size() - 1;
        int left = 0, right = matrix[0].size() - 1;
        
        while (top <= bottom && left <= right) {
            // Traverse right
            for (int i = left; i <= right; i++) {
                result.push_back(matrix[top][i]);
            }
            top++;
            
            // Traverse down
            for (int i = top; i <= bottom; i++) {
                result.push_back(matrix[i][right]);
            }
            right--;
            
            if (top <= bottom) {
                // Traverse left
                for (int i = right; i >= left; i--) {
                    result.push_back(matrix[bottom][i]);
                }
                bottom--;
            }
            
            if (left <= right) {
                // Traverse up
                for (int i = bottom; i >= top; i--) {
                    result.push_back(matrix[i][left]);
                }
                left++;
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(m*n), Space: O(1) excluding result",
    comments: [
      {
        author: "MatrixTraversalExpert",
        content: "Clean boundary approach! Four directions with shrinking boundaries.",
      },
      {
        author: "CodeReviewer42",
        content: "Good checks for top<=bottom and left<=right after first two traversals.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles single row and single column matrices correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use direction vectors, but boundary method is more intuitive."
      }
    ]
  },

  {
    problemName: "Set Matrix Zeroes",
    author: "In-Place Modifier",
    explanation: "Use first row and first column as markers. First pass mark zeros, second pass set zeros based on markers.",
    solution: `class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int m = matrix.size(), n = matrix[0].size();
        bool firstRowZero = false, firstColZero = false;
        
        // Check if first row has zero
        for (int j = 0; j < n; j++) {
            if (matrix[0][j] == 0) {
                firstRowZero = true;
                break;
            }
        }
        
        // Check if first column has zero
        for (int i = 0; i < m; i++) {
            if (matrix[i][0] == 0) {
                firstColZero = true;
                break;
            }
        }
        
        // Use first row/col as markers
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
        
        // Set zeros based on markers
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
        
        // Set first row if needed
        if (firstRowZero) {
            for (int j = 0; j < n; j++) {
                matrix[0][j] = 0;
            }
        }
        
        // Set first column if needed
        if (firstColZero) {
            for (int i = 0; i < m; i++) {
                matrix[i][0] = 0;
            }
        }
    }
};`,
    notes: "Time: O(m*n), Space: O(1)",
    comments: [
      {
        author: "InPlaceAlgorithmist",
        content: "Brilliant O(1) space solution using first row/col as markers!",
      },
      {
        author: "CodeReviewer42",
        content: "Good separation of first row/col handling from the main marking logic.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases where first row/col themselves contain zeros correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use two additional arrays, but this in-place approach is optimal."
      }
    ]
  },

  {
    problemName: "Rotate Image",
    author: "Matrix Transformer",
    explanation: "Two-step approach: transpose matrix (swap rows and columns), then reverse each row.",
    solution: `class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        int n = matrix.size();
        
        // Transpose matrix
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                swap(matrix[i][j], matrix[j][i]);
            }
        }
        
        // Reverse each row
        for (int i = 0; i < n; i++) {
            reverse(matrix[i].begin(), matrix[i].end());
        }
    }
};`,
    notes: "Time: O(n²), Space: O(1)",
    comments: [
      {
        author: "MatrixOperationsExpert",
        content: "Elegant two-step approach! Transpose + reverse = 90° rotation.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean and efficient. The transpose is done in-place with j starting from i+1.",
      },
      {
        author: "MathGeek",
        content: "Mathematically, rotation is transpose followed by reflection.",
      },
      {
        author: "AlternativeThinker",
        content: "We could rotate layer by layer, but this approach is simpler to implement."
      }
    ]
  },

  {
    problemName: "Word Search",
    author: "Backtracking Searcher",
    explanation: "Use DFS backtracking. For each starting position, explore all four directions, marking visited cells.",
    solution: `class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        int m = board.size(), n = board[0].size();
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (backtrack(board, word, i, j, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
    
private:
    bool backtrack(vector<vector<char>>& board, string& word, int i, int j, int index) {
        if (index == word.length()) {
            return true;
        }
        
        if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size() || 
            board[i][j] != word[index]) {
            return false;
        }
        
        // Mark as visited
        char temp = board[i][j];
        board[i][j] = '#';
        
        // Explore four directions
        bool found = backtrack(board, word, i + 1, j, index + 1) ||
                     backtrack(board, word, i - 1, j, index + 1) ||
                     backtrack(board, word, i, j + 1, index + 1) ||
                     backtrack(board, word, i, j - 1, index + 1);
        
        // Restore original character
        board[i][j] = temp;
        
        return found;
    }
};`,
    notes: "Time: O(m*n*4^L) where L is word length, Space: O(L) for recursion stack",
    comments: [
      {
        author: "BacktrackingMaster",
        content: "Classic backtracking with DFS! Good pruning when characters don't match.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean marking/unmarking of visited cells using temporary storage.",
      },
      {
        author: "OptimizationExpert",
        content: "We could add a visited matrix, but modifying board saves space.",
      },
      {
        author: "AlternativeThinker",
        content: "Trie could help for multiple words, but for single word this is efficient."
      }
    ]
  },

  // Hard Array Problems (10)
  {
    problemName: "Trapping Rain Water",
    author: "Two Pointer Water Collector",
    explanation: "Use two pointers from both ends. Track left max and right max. Water trapped at each position is min(leftMax, rightMax) - height.",
    solution: `class Solution {
public:
    int trap(vector<int>& height) {
        int left = 0, right = height.size() - 1;
        int leftMax = 0, rightMax = 0;
        int water = 0;
        
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    water += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    water += rightMax - height[right];
                }
                right--;
            }
        }
        
        return water;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "TwoPointerExpert",
        content: "Brilliant two-pointer approach! No extra arrays needed.",
      },
      {
        author: "CodeReviewer42",
        content: "Key insight: water trapped depends on min(leftMax, rightMax) at each position.",
      },
      {
        author: "OptimizationExpert",
        content: "More efficient than DP approach which uses O(n) space for left/right arrays.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use stack for O(n) time and space, but this is optimal."
      }
    ]
  },

  {
    problemName: "Median of Two Sorted Arrays",
    author: "Binary Search Master",
    explanation: "Use binary search on smaller array. Partition both arrays such that left half has same elements as right half, and all left elements <= right elements.",
    solution: `class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        // Ensure nums1 is the smaller array
        if (nums1.size() > nums2.size()) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        int m = nums1.size(), n = nums2.size();
        int left = 0, right = m;
        
        while (left <= right) {
            int partition1 = (left + right) / 2;
            int partition2 = (m + n + 1) / 2 - partition1;
            
            int maxLeft1 = (partition1 == 0) ? INT_MIN : nums1[partition1 - 1];
            int minRight1 = (partition1 == m) ? INT_MAX : nums1[partition1];
            
            int maxLeft2 = (partition2 == 0) ? INT_MIN : nums2[partition2 - 1];
            int minRight2 = (partition2 == n) ? INT_MAX : nums2[partition2];
            
            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                // Found correct partition
                if ((m + n) % 2 == 0) {
                    return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2.0;
                } else {
                    return max(maxLeft1, maxLeft2);
                }
            } else if (maxLeft1 > minRight2) {
                right = partition1 - 1;
            } else {
                left = partition1 + 1;
            }
        }
        
        return 0.0;
    }
};`,
    notes: "Time: O(log(min(m,n))), Space: O(1)",
    comments: [
      {
        author: "BinarySearchGuru",
        content: "One of the hardest binary search problems! Partition approach is brilliant.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of edge cases with INT_MIN and INT_MAX for empty partitions.",
      },
      {
        author: "AlgorithmHistorian",
        content: "Classic problem that tests deep understanding of binary search and medians.",
      },
      {
        author: "AlternativeThinker",
        content: "We could merge arrays for O(m+n) time, but this logarithmic solution is optimal."
      }
    ]
  },

  {
    problemName: "First Missing Positive",
    author: "In-Place Marker",
    explanation: "Use array itself as hash table. Place each number in its correct position (if within range), then find first position where number doesn't match index.",
    solution: `class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        int n = nums.size();
        
        // Place each number in its correct position if possible
        for (int i = 0; i < n; i++) {
            while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
                swap(nums[i], nums[nums[i] - 1]);
            }
        }
        
        // Find first missing positive
        for (int i = 0; i < n; i++) {
            if (nums[i] != i + 1) {
                return i + 1;
            }
        }
        
        return n + 1;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "InPlaceAlgorithmist",
        content: "Brilliant cyclic sort approach! O(1) space by using array as hash table.",
      },
      {
        author: "CodeReviewer42",
        content: "The while loop ensures each number eventually reaches its correct position.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles duplicates and numbers out of range correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use hash set for O(n) time and space, but this is optimal O(1) space."
      }
    ]
  },

  {
    problemName: "Sliding Window Maximum",
    author: "Deque Master",
    explanation: "Use deque to maintain indices of elements in current window in decreasing order. Remove from back while current element is larger, and remove from front if out of window.",
    solution: `class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        vector<int> result;
        deque<int> dq;
        
        for (int i = 0; i < nums.size(); i++) {
            // Remove elements out of window from front
            if (!dq.empty() && dq.front() == i - k) {
                dq.pop_front();
            }
            
            // Remove smaller elements from back
            while (!dq.empty() && nums[dq.back()] < nums[i]) {
                dq.pop_back();
            }
            
            dq.push_back(i);
            
            // Add to result once window size is reached
            if (i >= k - 1) {
                result.push_back(nums[dq.front()]);
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(k)",
    comments: [
      {
        author: "DequeExpert",
        content: "Perfect use of deque! Maintains decreasing order of values in window.",
      },
      {
        author: "CodeReviewer42",
        content: "Stores indices in deque instead of values for easy window boundary checking.",
      },
      {
        author: "OptimizationExpert",
        content: "Each element pushed and popped at most once, so O(n) time.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use heap for O(n log k), but deque gives optimal O(n)."
      }
    ]
  },

  {
    problemName: "Minimum Window Substring",
    author: "Sliding Window Pro",
    explanation: "Use two pointers and hash map. Expand right pointer until all characters are included, then contract left pointer to find minimum window.",
    solution: `class Solution {
public:
    string minWindow(string s, string t) {
        unordered_map<char, int> target, window;
        for (char c : t) target[c]++;
        
        int left = 0, right = 0;
        int required = target.size();
        int formed = 0;
        int minLen = INT_MAX;
        int start = 0;
        
        while (right < s.length()) {
            char c = s[right];
            window[c]++;
            
            if (target.count(c) && window[c] == target[c]) {
                formed++;
            }
            
            while (left <= right && formed == required) {
                // Update minimum window
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    start = left;
                }
                
                // Contract window from left
                char leftChar = s[left];
                window[leftChar]--;
                if (target.count(leftChar) && window[leftChar] < target[leftChar]) {
                    formed--;
                }
                left++;
            }
            
            right++;
        }
        
        return minLen == INT_MAX ? "" : s.substr(start, minLen);
    }
};`,
    notes: "Time: O(m + n), Space: O(m + n)",
    comments: [
      {
        author: "SlidingWindowExpert",
        content: "Classic sliding window with character counting! Expand and contract strategy.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of 'formed' counter to track when all characters are satisfied.",
      },
      {
        author: "OptimizationExpert",
        content: "Each character processed at most twice (by left and right pointers), so O(n).",
      },
      {
        author: "AlternativeThinker",
        content: "We could use array instead of hash map since characters are limited, but hash map is more general."
      }
    ]
  },

  {
    problemName: "Largest Rectangle in Histogram",
    author: "Stack Calculator",
    explanation: "Use stack to track indices of increasing heights. When smaller height found, calculate area with stack top as smallest height.",
    solution: `class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        stack<int> st;
        int maxArea = 0;
        int n = heights.size();
        
        for (int i = 0; i <= n; i++) {
            int currentHeight = (i == n) ? 0 : heights[i];
            
            while (!st.empty() && currentHeight < heights[st.top()]) {
                int height = heights[st.top()];
                st.pop();
                int width = st.empty() ? i : i - st.top() - 1;
                maxArea = max(maxArea, height * width);
            }
            
            st.push(i);
        }
        
        return maxArea;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Brilliant stack-based solution! Maintains increasing height indices.",
      },
      {
        author: "CodeReviewer42",
        content: "Adding sentinel height 0 at the end ensures all bars are processed.",
      },
      {
        author: "AlgorithmEnthusiast",
        content: "The width calculation using stack indices is the key insight.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use divide and conquer for O(n log n), but stack gives optimal O(n)."
      }
    ]
  },

  {
    problemName: "Maximal Rectangle",
    author: "Histogram Transformer",
    explanation: "For each row, build histogram of consecutive 1's from top, then apply largest rectangle in histogram to each row.",
    solution: `class Solution {
public:
    int maximalRectangle(vector<vector<char>>& matrix) {
        if (matrix.empty()) return 0;
        
        int m = matrix.size(), n = matrix[0].size();
        vector<int> heights(n, 0);
        int maxArea = 0;
        
        for (int i = 0; i < m; i++) {
            // Update heights for current row
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == '1') {
                    heights[j]++;
                } else {
                    heights[j] = 0;
                }
            }
            // Calculate max area for current histogram
            maxArea = max(maxArea, largestRectangleArea(heights));
        }
        
        return maxArea;
    }
    
private:
    int largestRectangleArea(vector<int>& heights) {
        stack<int> st;
        int maxArea = 0;
        int n = heights.size();
        
        for (int i = 0; i <= n; i++) {
            int h = (i == n) ? 0 : heights[i];
            while (!st.empty() && h < heights[st.top()]) {
                int height = heights[st.top()];
                st.pop();
                int width = st.empty() ? i : i - st.top() - 1;
                maxArea = max(maxArea, height * width);
            }
            st.push(i);
        }
        return maxArea;
    }
};`,
    notes: "Time: O(m*n), Space: O(n)",
    comments: [
      {
        author: "DPAndStackExpert",
        content: "Clever reduction to histogram problem! Build histogram row by row.",
      },
      {
        author: "CodeReviewer42",
        content: "Reuses the histogram solution efficiently for each row.",
      },
      {
        author: "OptimizationExpert",
        content: "O(n) space for heights array, and O(n) for stack in each row processing.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DP with left/right boundaries, but this approach is more intuitive."
      }
    ]
  },

  {
    problemName: "Count of Smaller Numbers After Self",
    author: "Merge Sort Counter",
    explanation: "Use merge sort with counting. During merge process, count how many elements from right array are smaller than current left element.",
    solution: `class Solution {
public:
    vector<int> countSmaller(vector<int>& nums) {
        int n = nums.size();
        vector<int> result(n, 0);
        vector<pair<int, int>> indexedNums; // (value, original index)
        
        for (int i = 0; i < n; i++) {
            indexedNums.push_back({nums[i], i});
        }
        
        mergeSort(indexedNums, 0, n - 1, result);
        return result;
    }
    
private:
    void mergeSort(vector<pair<int, int>>& nums, int left, int right, vector<int>& result) {
        if (left >= right) return;
        
        int mid = left + (right - left) / 2;
        mergeSort(nums, left, mid, result);
        mergeSort(nums, mid + 1, right, result);
        merge(nums, left, mid, right, result);
    }
    
    void merge(vector<pair<int, int>>& nums, int left, int mid, int right, vector<int>& result) {
        vector<pair<int, int>> temp(right - left + 1);
        int i = left, j = mid + 1, k = 0;
        int rightCount = 0;
        
        while (i <= mid && j <= right) {
            if (nums[i].first > nums[j].first) {
                rightCount++;
                temp[k++] = nums[j++];
            } else {
                result[nums[i].second] += rightCount;
                temp[k++] = nums[i++];
            }
        }
        
        while (i <= mid) {
            result[nums[i].second] += rightCount;
            temp[k++] = nums[i++];
        }
        
        while (j <= right) {
            temp[k++] = nums[j++];
        }
        
        for (int p = 0; p < temp.size(); p++) {
            nums[left + p] = temp[p];
        }
    }
};`,
    notes: "Time: O(n log n), Space: O(n)",
    comments: [
      {
        author: "MergeSortExpert",
        content: "Brilliant use of merge sort for counting inversions! Classic divide and conquer.",
      },
      {
        author: "CodeReviewer42",
        content: "Stores original indices to update result array correctly during merge.",
      },
      {
        author: "AlgorithmEnthusiast",
        content: "The rightCount tracks how many elements from right are smaller than current left.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use BST or Fenwick tree, but merge sort is elegant and efficient."
      }
    ]
  },

  {
    problemName: "Candy",
    author: "Greedy Distributor",
    explanation: "Two passes: left to right ensuring right neighbor has more if rating is higher, then right to left ensuring left neighbor has more if rating is higher.",
    solution: `class Solution {
public:
    int candy(vector<int>& ratings) {
        int n = ratings.size();
        vector<int> candies(n, 1);
        
        // Left to right pass
        for (int i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) {
                candies[i] = candies[i - 1] + 1;
            }
        }
        
        // Right to left pass
        for (int i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                candies[i] = max(candies[i], candies[i + 1] + 1);
            }
        }
        
        return accumulate(candies.begin(), candies.end(), 0);
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "GreedyAlgorithmist",
        content: "Classic two-pass greedy! Ensures both left and right constraints are satisfied.",
      },
      {
        author: "CodeReviewer42",
        content: "The second pass uses max() to preserve candies from first pass.",
      },
      {
        author: "OptimizationExpert",
        content: "We could do this in O(1) space with careful tracking, but O(n) is acceptable.",
      },
      {
        author: "AlternativeThinker",
        content: "Single pass with peak detection is possible but more complex."
      }
    ]
  },

  {
    problemName: "N-Queens",
    author: "Backtracking Queen",
    explanation: "Use backtracking with three sets to track attacked columns and diagonals. Place queens row by row, checking conflicts.",
    solution: `class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> solutions;
        vector<string> board(n, string(n, '.'));
        unordered_set<int> cols, diag1, diag2;
        backtrack(0, n, board, solutions, cols, diag1, diag2);
        return solutions;
    }
    
private:
    void backtrack(int row, int n, vector<string>& board, vector<vector<string>>& solutions,
                  unordered_set<int>& cols, unordered_set<int>& diag1, unordered_set<int>& diag2) {
        if (row == n) {
            solutions.push_back(board);
            return;
        }
        
        for (int col = 0; col < n; col++) {
            if (cols.count(col) || diag1.count(row - col) || diag2.count(row + col)) {
                continue;
            }
            
            // Place queen
            board[row][col] = 'Q';
            cols.insert(col);
            diag1.insert(row - col);
            diag2.insert(row + col);
            
            // Recurse
            backtrack(row + 1, n, board, solutions, cols, diag1, diag2);
            
            // Remove queen
            board[row][col] = '.';
            cols.erase(col);
            diag1.erase(row - col);
            diag2.erase(row + col);
        }
    }
};`,
    notes: "Time: O(n!), Space: O(n)",
    comments: [
      {
        author: "BacktrackingMaster",
        content: "Classic backtracking with pruning! Uses three sets for efficient conflict checking.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean marking/unmarking of attacked positions using sets.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use bit masks for better performance, but sets are more readable.",
      },
      {
        author: "AlternativeThinker",
        content: "Iterative solutions exist but recursive backtracking is more natural for this problem."
      }
    ]
  },
   // ===== HASH TABLE SOLUTIONS =====
  
  // Easy (8)
  {
    problemName: "Intersection of Two Arrays",
    author: "Set Operator",
    explanation: "Convert both arrays to sets, then find the intersection using set operations.",
    solution: `class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> set1(nums1.begin(), nums1.end());
        unordered_set<int> resultSet;
        
        for (int num : nums2) {
            if (set1.count(num)) {
                resultSet.insert(num);
            }
        }
        
        return vector<int>(resultSet.begin(), resultSet.end());
    }
};`,
    notes: "Time: O(n + m), Space: O(n + m)",
    comments: [
      {
        author: "SetMaster",
        content: "Clean set-based solution! Automatically handles duplicates.",
      },
      {
        author: "CodeReviewer42",
        content: "Using unordered_set for O(1) lookups. Efficient and readable.",
      },
      {
        author: "AlternativeThinker",
        content: "We could also sort both arrays and use two pointers for O(1) space.",
      },
      {
        author: "OptimizationExpert",
        content: "If one array is much larger, it's better to put the smaller one in the set."
      }
    ]
  },

  {
    problemName: "Happy Number",
    author: "Cycle Detector",
    explanation: "Use a set to detect cycles. Keep calculating sum of squares of digits until we reach 1 or detect a cycle.",
    solution: `class Solution {
public:
    bool isHappy(int n) {
        unordered_set<int> seen;
        
        while (n != 1 && !seen.count(n)) {
            seen.insert(n);
            n = getNext(n);
        }
        
        return n == 1;
    }
    
private:
    int getNext(int n) {
        int sum = 0;
        while (n > 0) {
            int digit = n % 10;
            sum += digit * digit;
            n /= 10;
        }
        return sum;
    }
};`,
    notes: "Time: O(log n), Space: O(log n)",
    comments: [
      {
        author: "CycleDetectionExpert",
        content: "Perfect cycle detection using hash set! All non-happy numbers eventually cycle.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean separation of digit sum calculation into helper function.",
      },
      {
        author: "MathGeek",
        content: "Mathematically proven that all numbers either reach 1 or enter cycle 4→16→37→58→89→145→42→20→4",
      },
      {
        author: "AlternativeThinker",
        content: "We could use Floyd's cycle detection for O(1) space, but set is more readable."
      }
    ]
  },

  {
    problemName: "Isomorphic Strings",
    author: "Mapping Validator",
    explanation: "Use two hash maps to track character mappings in both directions. Ensure one-to-one mapping between characters.",
    solution: `class Solution {
public:
    bool isIsomorphic(string s, string t) {
        if (s.length() != t.length()) return false;
        
        unordered_map<char, char> sToT;
        unordered_map<char, char> tToS;
        
        for (int i = 0; i < s.length(); i++) {
            char charS = s[i];
            char charT = t[i];
            
            // Check mapping from s to t
            if (sToT.count(charS)) {
                if (sToT[charS] != charT) {
                    return false;
                }
            } else {
                sToT[charS] = charT;
            }
            
            // Check mapping from t to s
            if (tToS.count(charT)) {
                if (tToS[charT] != charS) {
                    return false;
                }
            } else {
                tToS[charT] = charS;
            }
        }
        
        return true;
    }
};`,
    notes: "Time: O(n), Space: O(1) since limited to 256 ASCII characters",
    comments: [
      {
        author: "MappingExpert",
        content: "Good use of bidirectional mapping! Prevents many-to-one mappings.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean validation of both directions ensures true isomorphism.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases like 'ab' vs 'aa' and 'aa' vs 'ab' correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use array of size 256 instead of hash maps for slightly better performance."
      }
    ]
  },

  {
    problemName: "Word Pattern",
    author: "Pattern Matcher",
    explanation: "Similar to isomorphic strings. Use two hash maps to track pattern-character to word mapping and word to pattern-character mapping.",
    solution: `class Solution {
public:
    bool wordPattern(string pattern, string s) {
        unordered_map<char, string> charToWord;
        unordered_map<string, char> wordToChar;
        
        vector<string> words;
        stringstream ss(s);
        string word;
        
        // Split string into words
        while (ss >> word) {
            words.push_back(word);
        }
        
        if (pattern.length() != words.size()) {
            return false;
        }
        
        for (int i = 0; i < pattern.length(); i++) {
            char c = pattern[i];
            string w = words[i];
            
            // Check char to word mapping
            if (charToWord.count(c)) {
                if (charToWord[c] != w) {
                    return false;
                }
            } else {
                charToWord[c] = w;
            }
            
            // Check word to char mapping
            if (wordToChar.count(w)) {
                if (wordToChar[w] != c) {
                    return false;
                }
            } else {
                wordToChar[w] = c;
            }
        }
        
        return true;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "PatternMatchingExpert",
        content: "Extends isomorphic strings concept to word patterns!",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of stringstream for word splitting. Handles multiple spaces correctly.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Important length check at the beginning prevents mismatched patterns.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use istringstream for more modern C++ string splitting."
      }
    ]
  },

  // Medium (12)
  {
    problemName: "Longest Consecutive Sequence",
    author: "Sequence Finder",
    explanation: "Use hash set for O(1) lookups. For each number, check if it's the start of a sequence (no num-1 exists), then expand sequence.",
    solution: `class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> numSet(nums.begin(), nums.end());
        int longest = 0;
        
        for (int num : numSet) {
            // Check if this is the start of a sequence
            if (!numSet.count(num - 1)) {
                int currentNum = num;
                int currentStreak = 1;
                
                // Expand the sequence
                while (numSet.count(currentNum + 1)) {
                    currentNum++;
                    currentStreak++;
                }
                
                longest = max(longest, currentStreak);
            }
        }
        
        return longest;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "SequenceExpert",
        content: "Brilliant O(n) solution! Only starts sequences from actual starting points.",
      },
      {
        author: "CodeReviewer42",
        content: "The key insight: only check sequences starting from numbers without num-1.",
      },
      {
        author: "OptimizationExpert",
        content: "Each number is part of exactly one sequence, so O(n) time overall.",
      },
      {
        author: "AlternativeThinker",
        content: "Sorting would give O(n log n), but this hash set approach is optimal."
      }
    ]
  },

  {
    problemName: "Insert Delete GetRandom O(1)",
    author: "Data Structure Designer",
    explanation: "Combine hash map (for O(1) lookups) with vector (for O(1) random access). When deleting, swap with last element.",
    solution: `class RandomizedSet {
private:
    unordered_map<int, int> valToIndex; // value to index in vector
    vector<int> values;
    
public:
    RandomizedSet() {}
    
    bool insert(int val) {
        if (valToIndex.count(val)) {
            return false;
        }
        valToIndex[val] = values.size();
        values.push_back(val);
        return true;
    }
    
    bool remove(int val) {
        if (!valToIndex.count(val)) {
            return false;
        }
        
        // Swap with last element
        int lastElement = values.back();
        int indexToRemove = valToIndex[val];
        
        values[indexToRemove] = lastElement;
        valToIndex[lastElement] = indexToRemove;
        
        // Remove last element
        values.pop_back();
        valToIndex.erase(val);
        
        return true;
    }
    
    int getRandom() {
        int randomIndex = rand() % values.size();
        return values[randomIndex];
    }
};`,
    notes: "Time: O(1) for all operations, Space: O(n)",
    comments: [
      {
        author: "DSDesigner",
        content: "Clever combination of hash map and vector! Enables all O(1) operations.",
      },
      {
        author: "CodeReviewer42",
        content: "The swap-and-pop technique for deletion maintains O(1) time.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles removal of last element correctly with the swap.",
      },
      {
        author: "AlternativeThinker",
        content: "We need to update the index of the swapped element in the hash map."
      }
    ]
  },

  {
    problemName: "Design Underground System",
    author: "System Designer",
    explanation: "Use two hash maps: one for active check-ins, another for aggregating travel times between stations.",
    solution: `class UndergroundSystem {
private:
    unordered_map<int, pair<string, int>> checkIns; // id -> {stationName, time}
    unordered_map<string, pair<int, int>> travelTimes; // "start->end" -> {totalTime, count}
    
public:
    UndergroundSystem() {}
    
    void checkIn(int id, string stationName, int t) {
        checkIns[id] = {stationName, t};
    }
    
    void checkOut(int id, string stationName, int t) {
        auto& checkIn = checkIns[id];
        string startStation = checkIn.first;
        int startTime = checkIn.second;
        
        string route = startStation + "->" + stationName;
        int travelTime = t - startTime;
        
        travelTimes[route].first += travelTime;
        travelTimes[route].second++;
        
        checkIns.erase(id);
    }
    
    double getAverageTime(string startStation, string endStation) {
        string route = startStation + "->" + endStation;
        auto& data = travelTimes[route];
        return (double)data.first / data.second;
    }
};`,
    notes: "Time: O(1) for all operations, Space: O(n + m) where n is active trips, m is routes",
    comments: [
      {
        author: "SystemDesignExpert",
        content: "Clean separation of check-in data and travel time aggregation!",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of pair to store total time and count for easy average calculation.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Properly removes check-in record after checkout to prevent memory leaks.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use nested hash maps for station pairs, but string concatenation is simpler."
      }
    ]
  },

  {
    problemName: "Find Duplicate File in System",
    author: "File System Parser",
    explanation: "Parse each file path to extract content and use hash map to group files by content.",
    solution: `class Solution {
public:
    vector<vector<string>> findDuplicate(vector<string>& paths) {
        unordered_map<string, vector<string>> contentToFiles;
        
        for (string& path : paths) {
            stringstream ss(path);
            string directory;
            ss >> directory;
            
            string fileInfo;
            while (ss >> fileInfo) {
                // Parse filename(content)
                int openParen = fileInfo.find('(');
                string filename = fileInfo.substr(0, openParen);
                string content = fileInfo.substr(openParen + 1, fileInfo.length() - openParen - 2);
                
                string fullPath = directory + "/" + filename;
                contentToFiles[content].push_back(fullPath);
            }
        }
        
        // Collect groups with duplicates
        vector<vector<string>> result;
        for (auto& [content, files] : contentToFiles) {
            if (files.size() > 1) {
                result.push_back(files);
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n * m) where n is paths, m is files per path, Space: O(n)",
    comments: [
      {
        author: "StringParser",
        content: "Good string parsing with stringstream and find! Handles the format well.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean extraction of filename and content using substring operations.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Properly handles the parentheses and builds correct file paths.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use regex for more robust parsing, but this is efficient and clear."
      }
    ]
  },

  {
    problemName: "Brick Wall",
    author: "Edge Counter",
    explanation: "Use hash map to count edges at each position. The solution is total rows minus maximum edges at any position.",
    solution: `class Solution {
public:
    int leastBricks(vector<vector<int>>& wall) {
        unordered_map<int, int> edgeCount;
        int maxEdges = 0;
        
        for (auto& row : wall) {
            int position = 0;
            // Don't include the last edge (end of wall)
            for (int i = 0; i < row.size() - 1; i++) {
                position += row[i];
                edgeCount[position]++;
                maxEdges = max(maxEdges, edgeCount[position]);
            }
        }
        
        return wall.size() - maxEdges;
    }
};`,
    notes: "Time: O(n * m), Space: O(n)",
    comments: [
      {
        author: "EdgeCountingExpert",
        content: "Clever insight! The weak point is where most edges align.",
      },
      {
        author: "CodeReviewer42",
        content: "Important to skip the last edge since all rows end at the same position.",
      },
      {
        author: "OptimizationExpert",
        content: "We only need to track the maximum, not all edge counts.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use prefix sums for each row, but this cumulative approach is simpler."
      }
    ]
  },

  {
    problemName: "Contiguous Array",
    author: "Prefix Sum Balancer",
    explanation: "Treat 0 as -1 and 1 as +1. Use hash map to track first occurrence of each prefix sum. Maximum subarray is between equal prefix sums.",
    solution: `class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        unordered_map<int, int> prefixSumIndex;
        prefixSumIndex[0] = -1; // Empty subarray has sum 0
        
        int maxLength = 0;
        int prefixSum = 0;
        
        for (int i = 0; i < nums.size(); i++) {
            // Treat 0 as -1, 1 as +1
            prefixSum += (nums[i] == 0) ? -1 : 1;
            
            if (prefixSumIndex.count(prefixSum)) {
                maxLength = max(maxLength, i - prefixSumIndex[prefixSum]);
            } else {
                prefixSumIndex[prefixSum] = i;
            }
        }
        
        return maxLength;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "PrefixSumMaster",
        content: "Brilliant transformation! Equal numbers of 0s and 1s means sum = 0.",
      },
      {
        author: "CodeReviewer42",
        content: "The initial prefixSumIndex[0] = -1 handles subarrays starting from index 0.",
      },
      {
        author: "OptimizationExpert",
        content: "Only stores first occurrence of each prefix sum for maximum length.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use array instead of hash map since sum range is limited to [-n, n]."
      }
    ]
  },

  {
    problemName: "Find All Duplicates in an Array",
    author: "In-Place Marker",
    explanation: "Use the array itself as a marker. For each number, mark the position (num-1) as negative. If already negative, it's a duplicate.",
    solution: `class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        vector<int> result;
        
        for (int i = 0; i < nums.size(); i++) {
            int index = abs(nums[i]) - 1;
            
            if (nums[index] < 0) {
                result.push_back(index + 1);
            } else {
                nums[index] = -nums[index];
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1) excluding result",
    comments: [
      {
        author: "InPlaceAlgorithmist",
        content: "Clever negative marking technique! O(1) space by using array as marker.",
      },
      {
        author: "CodeReviewer42",
        content: "Uses abs() to handle already negative numbers during processing.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Works because numbers are between 1 and n, and array size is n.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use hash set for O(n) space, but this in-place approach is optimal."
      }
    ]
  },

  {
    problemName: "Encode and Decode TinyURL",
    author: "URL Shortener",
    explanation: "Use hash map to store mapping from short URL to long URL. Generate random short codes.",
    solution: `class Solution {
private:
    unordered_map<string, string> urlMap;
    string characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    string baseUrl = "http://tinyurl.com/";
    
public:
    // Encodes a URL to a shortened URL.
    string encode(string longUrl) {
        string shortCode;
        do {
            shortCode = generateRandomCode();
        } while (urlMap.count(baseUrl + shortCode));
        
        string shortUrl = baseUrl + shortCode;
        urlMap[shortUrl] = longUrl;
        return shortUrl;
    }
    
    // Decodes a shortened URL to its original URL.
    string decode(string shortUrl) {
        return urlMap[shortUrl];
    }
    
private:
    string generateRandomCode() {
        string code;
        for (int i = 0; i < 6; i++) {
            code += characters[rand() % characters.length()];
        }
        return code;
    }
};`,
    notes: "Time: O(1) for both operations, Space: O(n)",
    comments: [
      {
        author: "URLShorteningExpert",
        content: "Practical implementation! Handles potential collisions with do-while loop.",
      },
      {
        author: "CodeReviewer42",
        content: "Good character set for URL-friendly short codes.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Checks for existing codes to prevent overwriting.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use counter-based encoding for guaranteed uniqueness, but random is more secure."
      }
    ]
  },

  // Hard (5)
  {
    problemName: "Sudoku Solver",
    author: "Backtracking Solver",
    explanation: "Use backtracking with three sets to track used numbers in rows, columns, and boxes. Try all possibilities for empty cells.",
    solution: `class Solution {
public:
    void solveSudoku(vector<vector<char>>& board) {
        solve(board);
    }
    
private:
    bool solve(vector<vector<char>>& board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == '.') {
                    for (char c = '1'; c <= '9'; c++) {
                        if (isValid(board, i, j, c)) {
                            board[i][j] = c;
                            if (solve(board)) {
                                return true;
                            }
                            board[i][j] = '.'; // backtrack
                        }
                    }
                    return false; // no valid number found
                }
            }
        }
        return true; // all cells filled
    }
    
    bool isValid(vector<vector<char>>& board, int row, int col, char c) {
        for (int i = 0; i < 9; i++) {
            // Check row
            if (board[row][i] == c) return false;
            // Check column
            if (board[i][col] == c) return false;
            // Check 3x3 box
            if (board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] == c) return false;
        }
        return true;
    }
};`,
    notes: "Time: O(9^(n*n)) but heavily pruned, Space: O(1)",
    comments: [
      {
        author: "BacktrackingMaster",
        content: "Classic backtracking! Tries all possibilities with pruning.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean isValid function checks row, column and box efficiently.",
      },
      {
        author: "OptimizationExpert",
        content: "We could precompute possible numbers for each cell to reduce branching.",
      },
      {
        author: "AlternativeThinker",
        content: "Dancing Links algorithm is more efficient but much more complex."
      }
    ]
  },

  {
    problemName: "Word Squares",
    author: "Prefix Builder",
    explanation: "Use backtracking with trie or hash map for prefix lookup. Build square row by row, ensuring each prefix matches corresponding column.",
    solution: `class Solution {
public:
    vector<vector<string>> wordSquares(vector<string>& words) {
        unordered_map<string, vector<string>> prefixMap;
        int n = words[0].size();
        
        // Build prefix map
        for (string& word : words) {
            for (int i = 0; i <= n; i++) {
                string prefix = word.substr(0, i);
                prefixMap[prefix].push_back(word);
            }
        }
        
        vector<vector<string>> result;
        vector<string> square;
        backtrack(0, n, square, prefixMap, result);
        return result;
    }
    
private:
    void backtrack(int row, int n, vector<string>& square, 
                   unordered_map<string, vector<string>>& prefixMap,
                   vector<vector<string>>& result) {
        if (row == n) {
            result.push_back(square);
            return;
        }
        
        // Build prefix for current row
        string prefix;
        for (int i = 0; i < row; i++) {
            prefix += square[i][row];
        }
        
        // Get words with matching prefix
        for (string& word : prefixMap[prefix]) {
            square.push_back(word);
            backtrack(row + 1, n, square, prefixMap, result);
            square.pop_back();
        }
    }
};`,
    notes: "Time: O(n * 26^n) in worst case, Space: O(n * L) where L is total characters",
    comments: [
      {
        author: "WordSquareExpert",
        content: "Clever prefix-based backtracking! Ensures column prefixes match row prefixes.",
      },
      {
        author: "CodeReviewer42",
        content: "Good prefix map that stores all prefixes from length 0 to n.",
      },
      {
        author: "OptimizationExpert",
        content: "Using trie instead of hash map could be more memory efficient for large inputs.",
      },
      {
        author: "AlternativeThinker",
        content: "We could prune early when no words match the required prefix."
      }
    ]
  },
  // ===== STRING SOLUTIONS =====
  
  // Easy (10)
  {
    problemName: "Valid Palindrome",
    author: "Two Pointer Validator",
    explanation: "Use two pointers from both ends, skipping non-alphanumeric characters. Compare characters case-insensitively.",
    solution: `class Solution {
public:
    bool isPalindrome(string s) {
        int left = 0, right = s.length() - 1;
        
        while (left < right) {
            // Skip non-alphanumeric characters from left
            while (left < right && !isalnum(s[left])) {
                left++;
            }
            // Skip non-alphanumeric characters from right
            while (left < right && !isalnum(s[right])) {
                right--;
            }
            
            // Compare characters case-insensitively
            if (tolower(s[left]) != tolower(s[right])) {
                return false;
            }
            
            left++;
            right--;
        }
        
        return true;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "TwoPointerExpert",
        content: "Clean two-pointer approach! Handles all edge cases elegantly.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of isalnum() and tolower() for proper character handling.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles empty string, single character, and strings with only non-alphanumeric characters.",
      },
      {
        author: "AlternativeThinker",
        content: "We could filter first then check, but this avoids extra space usage."
      }
    ]
  },

  {
    problemName: "Valid Anagram",
    author: "Frequency Counter",
    explanation: "Use frequency array to count characters in both strings. Compare if frequencies match.",
    solution: `class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) return false;
        
        vector<int> freq(26, 0);
        
        // Count characters in s
        for (char c : s) {
            freq[c - 'a']++;
        }
        
        // Decrement counts for characters in t
        for (char c : t) {
            freq[c - 'a']--;
            if (freq[c - 'a'] < 0) {
                return false;
            }
        }
        
        return true;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "FrequencyMaster",
        content: "Efficient array-based solution! O(1) space for English letters.",
      },
      {
        author: "CodeReviewer42",
        content: "Early return when frequency becomes negative improves efficiency.",
      },
      {
        author: "OptimizationExpert",
        content: "For Unicode, we'd need hash map, but array is faster for English.",
      },
      {
        author: "AlternativeThinker",
        content: "We could sort both strings and compare for O(n log n) time, O(1) space."
      }
    ]
  },

  {
    problemName: "First Unique Character in a String",
    author: "Frequency Analyzer",
    explanation: "First pass: count frequency of each character. Second pass: find first character with frequency 1.",
    solution: `class Solution {
public:
    int firstUniqChar(string s) {
        vector<int> freq(26, 0);
        
        // Count frequencies
        for (char c : s) {
            freq[c - 'a']++;
        }
        
        // Find first unique character
        for (int i = 0; i < s.length(); i++) {
            if (freq[s[i] - 'a'] == 1) {
                return i;
            }
        }
        
        return -1;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "TwoPassExpert",
        content: "Efficient two-pass approach! O(n) time with O(1) space.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean separation of frequency counting and unique character finding.",
      },
      {
        author: "OptimizationExpert",
        content: "Array is more efficient than hash map for limited character set.",
      },
      {
        author: "AlternativeThinker",
        content: "We could store both frequency and first index in one pass with linked hash map."
      }
    ]
  },

  {
    problemName: "Reverse String",
    author: "Two Pointer Reverser",
    explanation: "Use two pointers from both ends, swap characters until they meet in the middle.",
    solution: `class Solution {
public:
    void reverseString(vector<char>& s) {
        int left = 0, right = s.size() - 1;
        
        while (left < right) {
            swap(s[left], s[right]);
            left++;
            right--;
        }
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "TwoPointerMaster",
        content: "Classic two-pointer string reversal! In-place and efficient.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean and straightforward. No extra space needed.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles empty array and single character correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use STL reverse, but understanding the algorithm is important."
      }
    ]
  },

  {
    problemName: "Reverse Integer",
    author: "Digit Reverser",
    explanation: "Process digits from right to left, building reversed number. Check for integer overflow at each step.",
    solution: `class Solution {
public:
    int reverse(int x) {
        int reversed = 0;
        
        while (x != 0) {
            int digit = x % 10;
            x /= 10;
            
            // Check for overflow before multiplying
            if (reversed > INT_MAX / 10 || (reversed == INT_MAX / 10 && digit > 7)) {
                return 0;
            }
            if (reversed < INT_MIN / 10 || (reversed == INT_MIN / 10 && digit < -8)) {
                return 0;
            }
            
            reversed = reversed * 10 + digit;
        }
        
        return reversed;
    }
};`,
    notes: "Time: O(log x), Space: O(1)",
    comments: [
      {
        author: "OverflowExpert",
        content: "Good overflow checking! Prevents undefined behavior.",
      },
      {
        author: "CodeReviewer42",
        content: "Checks overflow before the actual multiplication and addition.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles negative numbers correctly through modulo and division.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use long long for intermediate storage, but this is more space efficient."
      }
    ]
  },

  {
    problemName: "Implement strStr()",
    author: "String Matcher",
    explanation: "Use sliding window to check each possible starting position. For each position, check if substring matches needle.",
    solution: `class Solution {
public:
    int strStr(string haystack, string needle) {
        int n = haystack.length();
        int m = needle.length();
        
        if (m == 0) return 0;
        if (n < m) return -1;
        
        for (int i = 0; i <= n - m; i++) {
            int j = 0;
            while (j < m && haystack[i + j] == needle[j]) {
                j++;
            }
            if (j == m) {
                return i;
            }
        }
        
        return -1;
    }
};`,
    notes: "Time: O(n * m), Space: O(1)",
    comments: [
      {
        author: "StringMatchingExpert",
        content: "Straightforward sliding window approach! Good for small patterns.",
      },
      {
        author: "CodeReviewer42",
        content: "Proper handling of edge cases: empty needle and shorter haystack.",
      },
      {
        author: "OptimizationExpert",
        content: "For large inputs, KMP algorithm would be more efficient with O(n + m) time.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use Rabin-Karp with rolling hash for average O(n + m) time."
      }
    ]
  },

  {
    problemName: "Longest Common Prefix",
    author: "Vertical Scanner",
    explanation: "Compare characters vertically (same position across all strings). Stop when characters don't match.",
    solution: `class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.empty()) return "";
        
        for (int i = 0; i < strs[0].length(); i++) {
            char c = strs[0][i];
            for (int j = 1; j < strs.size(); j++) {
                if (i >= strs[j].length() || strs[j][i] != c) {
                    return strs[0].substr(0, i);
                }
            }
        }
        
        return strs[0];
    }
};`,
    notes: "Time: O(S) where S is total characters, Space: O(1)",
    comments: [
      {
        author: "VerticalScanner",
        content: "Efficient vertical scanning! Stops early when mismatch found.",
      },
      {
        author: "CodeReviewer42",
        content: "Good bounds checking with i >= strs[j].length().",
      },
      {
        author: "OptimizationExpert",
        content: "Worst case is when all strings are identical, O(n * m) time.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use divide and conquer or binary search, but this is simpler."
      }
    ]
  },

  {
    problemName: "Valid Parentheses",
    author: "Stack Validator",
    explanation: "Use stack to track opening brackets. When closing bracket found, check if it matches top of stack.",
    solution: `class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        unordered_map<char, char> matching = {
            {')', '('},
            {']', '['},
            {'}', '{'}
        };
        
        for (char c : s) {
            if (c == '(' || c == '[' || c == '{') {
                st.push(c);
            } else {
                if (st.empty() || st.top() != matching[c]) {
                    return false;
                }
                st.pop();
            }
        }
        
        return st.empty();
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackMaster",
        content: "Classic stack application! Perfect for nested bracket matching.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of hash map for clean bracket matching logic.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Final check st.empty() ensures all brackets are closed.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use counter method for single bracket type, but stack handles all types."
      }
    ]
  },

  {
    problemName: "Roman to Integer",
    author: "Roman Numerals Converter",
    explanation: "Process from left to right. If current value is less than next value, subtract current value, otherwise add it.",
    solution: `class Solution {
public:
    int romanToInt(string s) {
        unordered_map<char, int> values = {
            {'I', 1},
            {'V', 5},
            {'X', 10},
            {'L', 50},
            {'C', 100},
            {'D', 500},
            {'M', 1000}
        };
        
        int result = 0;
        int n = s.length();
        
        for (int i = 0; i < n; i++) {
            int current = values[s[i]];
            int next = (i < n - 1) ? values[s[i + 1]] : 0;
            
            if (current < next) {
                result -= current;
            } else {
                result += current;
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "RomanExpert",
        content: "Clever left-to-right processing! Handles subtractive notation correctly.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of hash map for clean value lookup.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Proper bounds checking for next value lookup.",
      },
      {
        author: "AlternativeThinker",
        content: "We could process right-to-left and always add, checking if we need to subtract previous."
      }
    ]
  },

  {
    problemName: "Count and Say",
    author: "Sequence Generator",
    explanation: "Iteratively generate each term from previous term. Count consecutive same digits and append count-digit pairs.",
    solution: `class Solution {
public:
    string countAndSay(int n) {
        if (n == 1) return "1";
        
        string prev = "1";
        for (int i = 2; i <= n; i++) {
            string current = "";
            int count = 1;
            char digit = prev[0];
            
            for (int j = 1; j < prev.length(); j++) {
                if (prev[j] == digit) {
                    count++;
                } else {
                    current += to_string(count) + digit;
                    count = 1;
                    digit = prev[j];
                }
            }
            current += to_string(count) + digit;
            prev = current;
        }
        
        return prev;
    }
};`,
    notes: "Time: O(2^n) in worst case, Space: O(2^(n-1))",
    comments: [
      {
        author: "SequenceGenerator",
        content: "Iterative generation! Each term builds on previous term.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean counting of consecutive digits with string building.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles n=1 as base case correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use recursion, but iterative is more space efficient."
      }
    ]
  },

  // Medium (15)
  {
    problemName: "Longest Substring Without Repeating Characters",
    author: "Sliding Window Expert",
    explanation: "Use sliding window with hash set. Expand right pointer, when duplicate found, shrink left pointer until duplicate removed.",
    solution: `class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_set<char> window;
        int left = 0, maxLength = 0;
        
        for (int right = 0; right < s.length(); right++) {
            // Shrink window until no duplicate
            while (window.count(s[right])) {
                window.erase(s[left]);
                left++;
            }
            
            window.insert(s[right]);
            maxLength = max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
};`,
    notes: "Time: O(n), Space: O(min(n, m)) where m is character set size",
    comments: [
      {
        author: "SlidingWindowMaster",
        content: "Classic sliding window! Maintains window with unique characters.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean shrinking of left boundary when duplicate encountered.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use hash map to store indices for O(1) left jumps.",
      },
      {
        author: "AlternativeThinker",
        content: "Array of size 128 could be used instead of hash set for ASCII."
      }
    ]
  },

  {
    problemName: "Longest Palindromic Substring",
    author: "Center Expansion Expert",
    explanation: "Expand around each possible center (character or between characters). Track longest palindrome found.",
    solution: `class Solution {
public:
    string longestPalindrome(string s) {
        if (s.empty()) return "";
        
        int start = 0, maxLength = 1;
        
        for (int i = 0; i < s.length(); i++) {
            // Expand around single character center
            int len1 = expandAroundCenter(s, i, i);
            // Expand around center between characters
            int len2 = expandAroundCenter(s, i, i + 1);
            
            int len = max(len1, len2);
            if (len > maxLength) {
                maxLength = len;
                start = i - (len - 1) / 2;
            }
        }
        
        return s.substr(start, maxLength);
    }
    
private:
    int expandAroundCenter(string& s, int left, int right) {
        while (left >= 0 && right < s.length() && s[left] == s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
};`,
    notes: "Time: O(n²), Space: O(1)",
    comments: [
      {
        author: "PalindromeExpert",
        content: "Center expansion approach! Handles both odd and even length palindromes.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean separation of expansion logic into helper function.",
      },
      {
        author: "OptimizationExpert",
        content: "Manacher's algorithm provides O(n) time but is more complex.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use DP with O(n²) time and space, but this uses O(1) space."
      }
    ]
  },

  {
    problemName: "Palindromic Substrings",
    author: "Center Counter",
    explanation: "Similar to longest palindromic substring, but count all palindromic substrings by expanding around all centers.",
    solution: `class Solution {
public:
    int countSubstrings(string s) {
        int count = 0;
        
        for (int i = 0; i < s.length(); i++) {
            // Count palindromes with single character center
            count += expandAroundCenter(s, i, i);
            // Count palindromes with center between characters
            count += expandAroundCenter(s, i, i + 1);
        }
        
        return count;
    }
    
private:
    int expandAroundCenter(string& s, int left, int right) {
        int count = 0;
        while (left >= 0 && right < s.length() && s[left] == s[right]) {
            count++;
            left--;
            right++;
        }
        return count;
    }
};`,
    notes: "Time: O(n²), Space: O(1)",
    comments: [
      {
        author: "PalindromeCounter",
        content: "Center expansion adapted for counting! Efficient O(n²) solution.",
      },
      {
        author: "CodeReviewer42",
        content: "Same expansion logic as longest palindrome, but returns count instead of length.",
      },
      {
        author: "OptimizationExpert",
        content: "Manacher's algorithm could give O(n) time but is much more complex.",
      },
      {
        author: "AlternativeThinker",
        content: "DP approach would use O(n²) space, this uses O(1) space."
      }
    ]
  },

  {
    problemName: "String to Integer (atoi)",
    author: "String Parser",
    explanation: "Process string character by character: skip whitespace, check sign, read digits, handle overflow.",
    solution: `class Solution {
public:
    int myAtoi(string s) {
        int i = 0, n = s.length();
        int sign = 1;
        long result = 0;
        
        // Skip leading whitespace
        while (i < n && s[i] == ' ') {
            i++;
        }
        
        // Check sign
        if (i < n && (s[i] == '+' || s[i] == '-')) {
            sign = (s[i] == '-') ? -1 : 1;
            i++;
        }
        
        // Process digits
        while (i < n && isdigit(s[i])) {
            int digit = s[i] - '0';
            
            // Check for overflow
            if (result > (INT_MAX - digit) / 10) {
                return (sign == 1) ? INT_MAX : INT_MIN;
            }
            
            result = result * 10 + digit;
            i++;
        }
        
        return sign * result;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "StringParserExpert",
        content: "Comprehensive parsing! Handles all edge cases: whitespace, signs, overflow.",
      },
      {
        author: "CodeReviewer42",
        content: "Good overflow checking using integer arithmetic instead of long comparison.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles cases like empty string, only whitespace, and non-digit characters.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use finite state machine for more complex parsing requirements."
      }
    ]
  },

  {
    problemName: "Longest Repeating Character Replacement",
    author: "Sliding Window Optimizer",
    explanation: "Use sliding window with character counts. Track max frequency in current window. Window is valid if (window size - max frequency) <= k.",
    solution: `class Solution {
public:
    int characterReplacement(string s, int k) {
        vector<int> count(26, 0);
        int left = 0, maxCount = 0, maxLength = 0;
        
        for (int right = 0; right < s.length(); right++) {
            count[s[right] - 'A']++;
            maxCount = max(maxCount, count[s[right] - 'A']);
            
            // Current window size is (right - left + 1)
            // If we need to replace more than k characters, shrink window
            while (right - left + 1 - maxCount > k) {
                count[s[left] - 'A']--;
                left++;
                // Note: we don't need to update maxCount here due to the maxLength property
            }
            
            maxLength = max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "SlidingWindowExpert",
        content: "Clever sliding window! The key insight is tracking max frequency in window.",
      },
      {
        author: "CodeReviewer42",
        content: "The while loop condition (window size - maxCount > k) determines validity.",
      },
      {
        author: "OptimizationExpert",
        content: "We don't need to update maxCount when shrinking because we only care about larger windows.",
      },
      {
        author: "AlternativeThinker",
        content: "We could track all character frequencies, but tracking max is sufficient."
      }
    ]
  },

  {
    problemName: "Group Anagrams",
    author: "Anagram Grouper",
    explanation: "Use sorted string as key in hash map. All anagrams will have the same sorted string.",
    solution: `class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> groups;
        
        for (string& str : strs) {
            string key = str;
            sort(key.begin(), key.end());
            groups[key].push_back(str);
        }
        
        vector<vector<string>> result;
        for (auto& [key, group] : groups) {
            result.push_back(group);
        }
        
        return result;
    }
};`,
    notes: "Time: O(n * k log k) where k is max string length, Space: O(n * k)",
    comments: [
      {
        author: "AnagramMaster",
        content: "Classic sorting-based grouping! Simple and effective.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean use of sorted string as hash map key.",
      },
      {
        author: "OptimizationExpert",
        content: "For better performance with long strings, we could use frequency count as key.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use character frequency string like '#2#1#3...' as key to avoid sorting."
      }
    ]
  },

  {
    problemName: "Generate Parentheses",
    author: "Backtracking Generator",
    explanation: "Use backtracking with open and close counts. Add '(' if open < n, add ')' if close < open.",
    solution: `class Solution {
public:
    vector<string> generateParenthesis(int n) {
        vector<string> result;
        backtrack("", 0, 0, n, result);
        return result;
    }
    
private:
    void backtrack(string current, int open, int close, int n, vector<string>& result) {
        if (current.length() == 2 * n) {
            result.push_back(current);
            return;
        }
        
        if (open < n) {
            backtrack(current + '(', open + 1, close, n, result);
        }
        
        if (close < open) {
            backtrack(current + ')', open, close + 1, n, result);
        }
    }
};`,
    notes: "Time: O(4^n/√n) - Catalan number, Space: O(n) for recursion stack",
    comments: [
      {
        author: "BacktrackingExpert",
        content: "Classic backtracking! Ensures valid parentheses by tracking open/close counts.",
      },
      {
        author: "CodeReviewer42",
        content: "The condition 'close < open' ensures we never have invalid closing parentheses.",
      },
      {
        author: "CombinatoricsExpert",
        content: "Number of results is the nth Catalan number C(2n,n)/(n+1).",
      },
      {
        author: "AlternativeThinker",
        content: "We could use iterative DP, but backtracking is more intuitive."
      }
    ]
  },

  {
    problemName: "Simplify Path",
    author: "Path Simplifier",
    explanation: "Use stack to process path components. Split by '/', handle '.', '..', and push valid directory names.",
    solution: `class Solution {
public:
    string simplifyPath(string path) {
        vector<string> stack;
        stringstream ss(path);
        string token;
        
        // Split by '/'
        while (getline(ss, token, '/')) {
            if (token == "" || token == ".") {
                continue;
            } else if (token == "..") {
                if (!stack.empty()) {
                    stack.pop_back();
                }
            } else {
                stack.push_back(token);
            }
        }
        
        // Build simplified path
        string result = "";
        for (string& dir : stack) {
            result += "/" + dir;
        }
        
        return result.empty() ? "/" : result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "PathProcessingExpert",
        content: "Clean stack-based processing! Handles all special cases correctly.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of stringstream with getline for path splitting.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles multiple slashes, '.', '..', and trailing slashes correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could process character by character, but stringstream is cleaner."
      }
    ]
  },

  {
    problemName: "Letter Combinations of a Phone Number",
    author: "Backtracking Generator",
    explanation: "Use backtracking to generate all combinations. For each digit, try all corresponding letters.",
    solution: `class Solution {
public:
    vector<string> letterCombinations(string digits) {
        if (digits.empty()) return {};
        
        vector<string> result;
        vector<string> mapping = {
            "", "", "abc", "def", "ghi", "jkl", 
            "mno", "pqrs", "tuv", "wxyz"
        };
        
        backtrack("", 0, digits, mapping, result);
        return result;
    }
    
private:
    void backtrack(string current, int index, string& digits, 
                   vector<string>& mapping, vector<string>& result) {
        if (index == digits.length()) {
            result.push_back(current);
            return;
        }
        
        string letters = mapping[digits[index] - '0'];
        for (char c : letters) {
            backtrack(current + c, index + 1, digits, mapping, result);
        }
    }
};`,
    notes: "Time: O(4^n), Space: O(n) for recursion stack",
    comments: [
      {
        author: "BacktrackingMaster",
        content: "Classic backtracking! Explores all possible combinations systematically.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean mapping from digit to letters using array indexing.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use iterative BFS approach to avoid recursion stack.",
      },
      {
        author: "AlternativeThinker",
        content: "For fixed input size, we could use nested loops, but backtracking handles variable length."
      }
    ]
  },

  {
    problemName: "Word Break",
    author: "Dynamic Programming Solver",
    explanation: "Use DP where dp[i] means first i characters can be segmented. For each position, check all possible word endings.",
    solution: `class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        unordered_set<string> wordSet(wordDict.begin(), wordDict.end());
        int n = s.length();
        vector<bool> dp(n + 1, false);
        dp[0] = true; // empty string
        
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && wordSet.count(s.substr(j, i - j))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        
        return dp[n];
    }
};`,
    notes: "Time: O(n³) - O(n²) loops * O(n) substring, Space: O(n)",
    comments: [
      {
        author: "DPExpert",
        content: "Classic DP approach! dp[i] represents segmentability up to index i.",
      },
      {
        author: "CodeReviewer42",
        content: "The break statement improves efficiency once a valid segmentation is found.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use trie for faster word lookups in the dictionary.",
      },
      {
        author: "AlternativeThinker",
        content: "BFS approach is also possible where we explore reachable indices."
      }
    ]
  },

  {
    problemName: "Decode String",
    author: "Stack Decoder",
    explanation: "Use stack to process encoded strings. Push current string and count when encountering '[', pop and decode when encountering ']'.",
    solution: `class Solution {
public:
    string decodeString(string s) {
        stack<pair<string, int>> st; // pair<current_string, repeat_count>
        string current = "";
        int count = 0;
        
        for (char c : s) {
            if (isdigit(c)) {
                count = count * 10 + (c - '0');
            } else if (c == '[') {
                st.push({current, count});
                current = "";
                count = 0;
            } else if (c == ']') {
                auto [prev, repeat] = st.top();
                st.pop();
                string temp = "";
                for (int i = 0; i < repeat; i++) {
                    temp += current;
                }
                current = prev + temp;
            } else {
                current += c;
            }
        }
        
        return current;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "StackDecoder",
        content: "Elegant stack-based decoding! Handles nested encodings naturally.",
      },
      {
        author: "CodeReviewer42",
        content: "Good use of pair to store both string and repeat count on stack.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles multiple levels of nesting and consecutive numbers correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use recursion, but stack approach is more intuitive."
      }
    ]
  },

  {
    problemName: "Find All Anagrams in a String",
    author: "Sliding Window Counter",
    explanation: "Use sliding window with frequency counts. Maintain counts of characters in current window and compare with target pattern.",
    solution: `class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        vector<int> result;
        if (s.length() < p.length()) return result;
        
        vector<int> pCount(26, 0), sCount(26, 0);
        
        // Initialize frequency counts
        for (char c : p) {
            pCount[c - 'a']++;
        }
        
        int windowSize = p.length();
        
        // Initialize first window
        for (int i = 0; i < windowSize; i++) {
            sCount[s[i] - 'a']++;
        }
        
        if (pCount == sCount) {
            result.push_back(0);
        }
        
        // Slide the window
        for (int i = windowSize; i < s.length(); i++) {
            // Remove leftmost character
            sCount[s[i - windowSize] - 'a']--;
            // Add new character
            sCount[s[i] - 'a']++;
            
            if (pCount == sCount) {
                result.push_back(i - windowSize + 1);
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "SlidingWindowExpert",
        content: "Efficient sliding window with frequency arrays! O(1) space for English letters.",
      },
      {
        author: "CodeReviewer42",
        content: "Direct vector comparison makes the anagram check very clean.",
      },
      {
        author: "OptimizationExpert",
        content: "We could use a single frequency array and a match counter for optimization.",
      },
      {
        author: "AlternativeThinker",
        content: "Hash map approach would work for Unicode but is slower for English."
      }
    ]
  },

  {
    problemName: "Permutation in String",
    author: "Sliding Window Matcher",
    explanation: "Similar to find all anagrams. Use sliding window to check if any window in s1 contains a permutation of s2.",
    solution: `class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        if (s1.length() > s2.length()) return false;
        
        vector<int> s1Count(26, 0), s2Count(26, 0);
        
        // Initialize frequency counts
        for (int i = 0; i < s1.length(); i++) {
            s1Count[s1[i] - 'a']++;
            s2Count[s2[i] - 'a']++;
        }
        
        if (s1Count == s2Count) {
            return true;
        }
        
        // Slide the window
        for (int i = s1.length(); i < s2.length(); i++) {
            // Remove leftmost character
            s2Count[s2[i - s1.length()] - 'a']--;
            // Add new character
            s2Count[s2[i] - 'a']++;
            
            if (s1Count == s2Count) {
                return true;
            }
        }
        
        return false;
    }
};`,
    notes: "Time: O(n), Space: O(1)",
    comments: [
      {
        author: "SlidingWindowMaster",
        content: "Efficient permutation checking! Same technique as anagram finding.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean frequency array comparison for permutation check.",
      },
      {
        author: "OptimizationExpert",
        content: "We could optimize by tracking the number of matching characters.",
      },
      {
        author: "AlternativeThinker",
        content: "For very long strings, we could use rolling hash but this is sufficient."
      }
    ]
  },

  {
    problemName: "Basic Calculator II",
    author: "Stack Calculator",
    explanation: "Process string left to right. Use stack to handle precedence. For '+' and '-', push with sign. For '*' and '/', calculate immediately.",
    solution: `class Solution {
public:
    int calculate(string s) {
        stack<int> st;
        char operation = '+';
        int currentNumber = 0;
        
        for (int i = 0; i < s.length(); i++) {
            char c = s[i];
            
            if (isdigit(c)) {
                currentNumber = currentNumber * 10 + (c - '0');
            }
            
            if ((!isdigit(c) && c != ' ') || i == s.length() - 1) {
                if (operation == '+') {
                    st.push(currentNumber);
                } else if (operation == '-') {
                    st.push(-currentNumber);
                } else if (operation == '*') {
                    int top = st.top();
                    st.pop();
                    st.push(top * currentNumber);
                } else if (operation == '/') {
                    int top = st.top();
                    st.pop();
                    st.push(top / currentNumber);
                }
                
                operation = c;
                currentNumber = 0;
            }
        }
        
        int result = 0;
        while (!st.empty()) {
            result += st.top();
            st.pop();
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "CalculatorExpert",
        content: "Smart stack handling! Deferred addition/subtraction, immediate multiplication/division.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of spaces and final character edge case.",
      },
      {
        author: "OptimizationExpert",
        content: "We could do this in O(1) space by tracking last number instead of using stack.",
      },
      {
        author: "AlternativeThinker",
        content: "Using stringstream would make parsing cleaner but less efficient."
      }
    ]
  },

  {
    problemName: "Integer to Roman",
    author: "Roman Numerals Builder",
    explanation: "Use greedy approach with sorted value-symbol pairs. Subtract largest possible values and append corresponding symbols.",
    solution: `class Solution {
public:
    string intToRoman(int num) {
        vector<pair<int, string>> values = {
            {1000, "M"}, {900, "CM"}, {500, "D"}, {400, "CD"},
            {100, "C"}, {90, "XC"}, {50, "L"}, {40, "XL"},
            {10, "X"}, {9, "IX"}, {5, "V"}, {4, "IV"}, {1, "I"}
        };
        
        string result = "";
        
        for (auto& [value, symbol] : values) {
            while (num >= value) {
                result += symbol;
                num -= value;
            }
        }
        
        return result;
    }
};`,
    notes: "Time: O(1), Space: O(1)",
    comments: [
      {
        author: "RomanNumeralsExpert",
        content: "Greedy approach with sorted values! Handles all subtractive cases.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean use of vector of pairs for value-symbol mapping.",
      },
      {
        author: "OptimizationExpert",
        content: "Since Roman numerals have limited range, this is effectively O(1).",
      },
      {
        author: "AlternativeThinker",
        content: "We could use hardcoded arrays for thousands, hundreds, etc., but this is more maintainable."
      }
    ]
  },

  // Hard (5)
  {
    problemName: "Edit Distance",
    author: "Dynamic Programming Expert",
    explanation: "Use DP where dp[i][j] represents minimum operations to convert first i chars of word1 to first j chars of word2. Consider insert, delete, replace.",
    solution: `class Solution {
public:
    int minDistance(string word1, string word2) {
        int m = word1.length(), n = word2.length();
        vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
        
        // Initialize base cases
        for (int i = 0; i <= m; i++) {
            dp[i][0] = i; // delete all characters from word1
        }
        for (int j = 0; j <= n; j++) {
            dp[0][j] = j; // insert all characters into word1
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1[i - 1] == word2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1]; // no operation needed
                } else {
                    dp[i][j] = 1 + min({
                        dp[i - 1][j],    // delete from word1
                        dp[i][j - 1],    // insert into word1
                        dp[i - 1][j - 1] // replace
                    });
                }
            }
        }
        
        return dp[m][n];
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n)",
    comments: [
      {
        author: "DPMaster",
        content: "Classic edit distance algorithm! Wagner-Fischer algorithm.",
      },
      {
        author: "CodeReviewer42",
        content: "Clean DP formulation with three operations: insert, delete, replace.",
      },
      {
        author: "OptimizationExpert",
        content: "We can optimize space to O(min(m,n)) by using two rows instead of full matrix.",
      },
      {
        author: "AlternativeThinker",
        content: "For similar strings, we could use Myers' bit-parallel algorithm for better performance."
      }
    ]
  },

  {
    problemName: "Regular Expression Matching",
    author: "Dynamic Programming Matcher",
    explanation: "Use DP where dp[i][j] means first i chars of s match first j chars of p. Handle '.' as any char and '*' as zero or more of preceding element.",
    solution: `class Solution {
public:
    bool isMatch(string s, string p) {
        int m = s.length(), n = p.length();
        vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
        dp[0][0] = true; // empty string matches empty pattern
        
        // Handle patterns like a*, a*b*, a*b*c* that can match empty string
        for (int j = 2; j <= n; j++) {
            if (p[j - 1] == '*') {
                dp[0][j] = dp[0][j - 2];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p[j - 1] == '*') {
                    // Zero occurrence of preceding char
                    dp[i][j] = dp[i][j - 2];
                    // One or more occurrences if preceding char matches
                    if (p[j - 2] == '.' || p[j - 2] == s[i - 1]) {
                        dp[i][j] = dp[i][j] || dp[i - 1][j];
                    }
                } else {
                    // Direct character match or '.'
                    if (p[j - 1] == '.' || p[j - 1] == s[i - 1]) {
                        dp[i][j] = dp[i - 1][j - 1];
                    }
                }
            }
        }
        
        return dp[m][n];
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n)",
    comments: [
      {
        author: "RegexExpert",
        content: "Complex DP for regex matching! Handles all special cases correctly.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of '*' with both zero and one-or-more occurrences.",
      },
      {
        author: "OptimizationExpert",
        content: "Space can be optimized to O(n) since we only need previous row.",
      },
      {
        author: "AlternativeThinker",
        content: "We could use NFA simulation but DP is more straightforward."
      }
    ]
  },

  {
    problemName: "Wildcard Matching",
    author: "Dynamic Programming Wildcard",
    explanation: "Similar to regex but simpler. Use DP where '?' matches any single char, '*' matches any sequence. Handle '*' by matching zero or more characters.",
    solution: `class Solution {
public:
    bool isMatch(string s, string p) {
        int m = s.length(), n = p.length();
        vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
        dp[0][0] = true;
        
        // Handle patterns starting with '*' that can match empty string
        for (int j = 1; j <= n; j++) {
            if (p[j - 1] == '*') {
                dp[0][j] = dp[0][j - 1];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p[j - 1] == '*') {
                    // '*' can match zero characters or one or more characters
                    dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
                } else if (p[j - 1] == '?' || p[j - 1] == s[i - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }
        
        return dp[m][n];
    }
};`,
    notes: "Time: O(m*n), Space: O(m*n)",
    comments: [
      {
        author: "WildcardExpert",
        content: "Clean DP for wildcard matching! Simpler than regex without precedence rules.",
      },
      {
        author: "CodeReviewer42",
        content: "Good handling of '*' with both zero and one-or-more character matching.",
      },
      {
        author: "OptimizationExpert",
        content: "We can optimize space to O(n) and add early termination for better performance.",
      },
      {
        author: "AlternativeThinker",
        content: "Two-pointer greedy approach works for many cases but DP is more general."
      }
    ]
  },

  {
    problemName: "Text Justification",
    author: "Line Formatter",
    explanation: "Greedy line packing. For each line, pack as many words as possible, then distribute spaces evenly. Handle last line separately.",
    solution: `class Solution {
public:
    vector<string> fullJustify(vector<string>& words, int maxWidth) {
        vector<string> result;
        int i = 0, n = words.size();
        
        while (i < n) {
            // Find words that fit in current line
            int j = i, lineLength = 0;
            while (j < n && lineLength + words[j].length() + (j - i) <= maxWidth) {
                lineLength += words[j].length();
                j++;
            }
            
            // Build the line
            string line = "";
            int numWords = j - i;
            int totalSpaces = maxWidth - lineLength;
            
            // If last line or only one word, left justify
            if (j == n || numWords == 1) {
                for (int k = i; k < j; k++) {
                    line += words[k];
                    if (k < j - 1) {
                        line += " ";
                    }
                }
                // Add remaining spaces at the end
                line += string(maxWidth - line.length(), ' ');
            } else {
                // Distribute spaces evenly
                int spacesBetween = totalSpaces / (numWords - 1);
                int extraSpaces = totalSpaces % (numWords - 1);
                
                for (int k = i; k < j; k++) {
                    line += words[k];
                    if (k < j - 1) {
                        int spaces = spacesBetween + (k - i < extraSpaces ? 1 : 0);
                        line += string(spaces, ' ');
                    }
                }
            }
            
            result.push_back(line);
            i = j;
        }
        
        return result;
    }
};`,
    notes: "Time: O(n), Space: O(n)",
    comments: [
      {
        author: "TextFormattingExpert",
        content: "Comprehensive text justification! Handles all spacing rules correctly.",
      },
      {
        author: "CodeReviewer42",
        content: "Good separation of last line case and multi-word line formatting.",
      },
      {
        author: "EdgeCaseHunter",
        content: "Handles single word lines and exact fitting correctly.",
      },
      {
        author: "AlternativeThinker",
        content: "We could precompute line breaks for better organization."
      }
    ]
  },
];

console.log(solutions)

export const solutionMap = new Map();
solutions.forEach(solution => {
  solutionMap.set(solution.problemName, solution)
})
